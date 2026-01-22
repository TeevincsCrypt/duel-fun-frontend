let alpha = 32400;
let beta = 27800;
const cap = 69000;

function update() {
  alpha += Math.random() * 600;
  beta += Math.random() * 600;

  alpha = Math.min(alpha, cap);
  beta = Math.min(beta, cap);

  document.querySelector('.alpha').style.width = `${(alpha / cap) * 100}%`;
  document.querySelector('.beta').style.width = `${(beta / cap) * 100}%`;
}

setInterval(update, 2000);