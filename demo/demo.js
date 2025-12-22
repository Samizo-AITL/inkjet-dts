// demo.js — Inkjet DTS / drive-response simple visualization
(() => {
  const canvas = document.getElementById("c");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // ---- Inkjet-like parameters ----
  let V = 30;      // Drive Voltage [V]
  let tau = 18;   // Delay / response time
  let zeta = 0.08; // Damping

  // drive pulse
  function drive(t) {
    if (t < 20) return V;
    if (t < 30) return -0.4 * V;
    return 0;
  }

  // simple second-order response (DTSっぽい)
  let x = 0, v = 0;
  function step(dt) {
    const f = drive(time);
    const a = f - 2 * zeta * v - x / tau;
    v += a * dt;
    x += v * dt;
    return x;
  }

  let time = 0;
  const hist = [];

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // simulate
    time += 0.6;
    const y = step(0.6);
    hist.push(y);
    if (hist.length > canvas.width) hist.shift();

    // draw axis
    ctx.strokeStyle = "#2a2f36";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // draw response
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    hist.forEach((v, i) => {
      const yy = canvas.height / 2 - v * 8;
      if (i === 0) ctx.moveTo(i, yy);
      else ctx.lineTo(i, yy);
    });
    ctx.stroke();

    // label
    ctx.fillStyle = "#9fb3c8";
    ctx.font = "12px system-ui";
    ctx.fillText(
      `V=${V}V  τ=${tau}  ζ=${zeta}`,
      20,
      canvas.height - 20
    );

    requestAnimationFrame(loop);
  }

  loop();
})();
