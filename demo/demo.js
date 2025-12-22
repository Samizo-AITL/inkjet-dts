// demo.js —— 確実に動く最小構成
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

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();

    const t = performance.now() * 0.002;
    for (let x = 0; x < canvas.width; x += 2) {
      const y =
        canvas.height / 2 +
        Math.sin(x * 0.01 + t) * 80;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(loop);
  }

  loop();
})();
