 function animateCurve(canvasId, startVal, endVal, duration = 5000) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const startTime = performance.now();

  function draw(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = startVal + (endVal - startVal) * progress;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw curve (simple quadratic for demo)
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.quadraticCurveTo(
      canvas.width / 2,
      canvas.height - value / 69000 * canvas.height,
      canvas.width,
      canvas.height - value / 69000 * canvas.height
    );
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#22c55e";
    ctx.stroke();

    if (progress < 1) {
      requestAnimationFrame(draw);
    }
  }

  requestAnimationFrame(draw);
}