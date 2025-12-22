// ===== 最低限・確実に動くテスト =====
(() => {
  const canvas = document.getElementById("c");
  if (!canvas) {
    console.error("canvas not found");
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("ctx not available");
    return;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();

    const t = Date.now() * 0.002;
    for (let x = 0; x < canvas.width; x++) {
      const y =
        canvas.height / 2 +
        Math.sin(x * 0.01 + t) * 80;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    requestAnimationFrame(draw);
  }

  draw();
})();
