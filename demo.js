const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  t += 0.01;

  // DTS parameters (0–1)
  const D = 0.5 + 0.5 * Math.sin(t * 0.7);   // Drop density
  const T = 0.5 + 0.5 * Math.sin(t * 0.4);   // Throughput
  const S = 0.5 + 0.5 * Math.sin(t * 0.9);   // Spread

  ctx.fillStyle = "rgba(11,15,20,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cols = Math.floor(40 + D * 80);
  const rows = Math.floor(30 + D * 60);
  const speed = 0.5 + T * 3.0;
  const spread = 1.0 + S * 6.0;

  ctx.fillStyle = "#e6f1ff";

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = (x / cols) * canvas.width;
      const py =
        ((y / rows) * canvas.height +
          (t * speed * 40) % canvas.height);

      ctx.beginPath();
      ctx.arc(px, py, spread, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // HUD text
  ctx.fillStyle = "#9fb3c8";
  ctx.font = "12px monospace";
  ctx.fillText(`D=${D.toFixed(2)}  T=${T.toFixed(2)}  S=${S.toFixed(2)}`, 24, 32);

  requestAnimationFrame(draw);
}

draw();
