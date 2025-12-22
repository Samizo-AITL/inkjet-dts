(() => {
  const canvas = document.getElementById("c");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // ---- Controls (D, T, S) ----
  const D = document.getElementById("D");
  const T = document.getElementById("T");
  const S = document.getElementById("S");
  const Dv = document.getElementById("Dv");
  const Tv = document.getElementById("Tv");
  const Sv = document.getElementById("Sv");

  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  function resize() {
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  function read() {
    const d = +D.value;
    const t = +T.value;
    const s = +S.value;
    Dv.textContent = d.toFixed(2);
    Tv.textContent = t.toFixed(2);
    Sv.textContent = s.toFixed(2);
    return { d, t, s };
  }

  // ---- Visual model (synthetic) ----
  // We emulate:
  // - D ↑ -> more dots (less grain)
  // - S ↑ -> larger spread -> blur/bleed
  // - T ↑ -> speed ↑, but effective density tends to drop (fewer passes)
  //
  // This is not physics; it is a qualitative educational visualization, consistent with the docs intent. :contentReference[oaicite:1]{index=1}

  let running = true;
  let t0 = performance.now();

  function reset() {
    D.value = "1.00";
    T.value = "1.00";
    S.value = "1.00";
    read();
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === " "){ running = !running; }
    if (e.key.toLowerCase() === "r"){ reset(); }
  });

  function bg() {
    // background gradient-ish
    const w = window.innerWidth, h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0b0f14";
    ctx.fillRect(0, 0, w, h);
  }

  function drawBars(qScore, speedScore) {
    const w = window.innerWidth, h = window.innerHeight;
    const x = 18, y = h - 92;
    const bw = Math.min(380, w - 36);
    const bh = 10;

    ctx.globalAlpha = 0.95;
    ctx.fillStyle = "rgba(255,255,255,0.10)";
    ctx.fillRect(x, y, bw, bh);
    ctx.fillRect(x, y + 24, bw, bh);

    ctx.fillStyle = "#c9d1d9";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText("Quality (synthetic)", x, y - 6);
    ctx.fillText("Speed (synthetic)", x, y + 18);

    ctx.fillStyle = "#58a6ff";
    ctx.fillRect(x, y, bw * qScore, bh);

    ctx.fillStyle = "#9fb3c8";
    ctx.fillRect(x, y + 24, bw * speedScore, bh);

    ctx.globalAlpha = 1;
  }

  function drawDots(params, now) {
    const w = window.innerWidth, h = window.innerHeight;
    const { d, t, s } = params;

    // "effective density" decreases with throughput (fewer passes)
    const effectiveD = d / (0.55 + 0.45 * t); // qualitative
    const density = clamp(effectiveD, 0.12, 2.2);

    // spread influences dot radius and bleed/blur
    const spread = clamp(s, 0.4, 2.2);
    const baseR = 0.8 + 1.9 * spread;

    // number of dots ~ density
    const area = w * h;
    const n = Math.floor(area / (9000 / density)); // tuned for visuals

    // motion is subtle to show "animation" without being noisy
    const phase = (now - t0) * (0.00035 + 0.00025 * t);

    // dot color / opacity
    const alpha = clamp(0.10 + 0.18 * density, 0.10, 0.42);

    ctx.save();
    ctx.globalCompositeOperation = "source-over";

    // mild bleed = shadow blur effect when spread is large
    const blur = Math.floor(6 * (spread - 0.4));
    ctx.shadowColor = "rgba(120,160,255,0.35)";
    ctx.shadowBlur = blur;

    for (let i = 0; i < n; i++) {
      // pseudo-random but deterministic distribution
      const rx = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
      const ry = (Math.sin(i * 93.9898 + 12.233) * 11235.2311) % 1;

      const x = (rx < 0 ? rx + 1 : rx) * w;
      const y = (ry < 0 ? ry + 1 : ry) * h;

      // micro jitter indicates scan/throughput
      const jx = Math.sin(phase * 6 + i * 0.07) * (0.5 + 1.2 * t);
      const jy = Math.cos(phase * 5 + i * 0.05) * (0.3 + 0.8 * t);

      // radius distribution affected by spread (bigger dots) and density (slightly smaller)
      const r = baseR * (0.65 + 0.7 * ((i % 17) / 16)) / (0.85 + 0.25 * density);

      ctx.fillStyle = `rgba(88,166,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(x + jx, y + jy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

    // ---- synthetic "scores" ----
    const qualityScore = clamp(
      (0.55 * (density / 1.2)) + (0.45 * (1.6 / (spread + 0.2))),
      0, 1
    );
    const speedScore = clamp((t - 0.30) / (2.50 - 0.30), 0, 1);

    drawBars(qualityScore, speedScore);
  }

  function frame(now) {
    const params = read();
    bg();
    if (running) drawDots(params, now);
    requestAnimationFrame(frame);
  }

  read();
  requestAnimationFrame(frame);
})();
