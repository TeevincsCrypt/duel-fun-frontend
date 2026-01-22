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


const alpha = document.querySelector(".progress.alpha");
const beta = document.querySelector(".progress.beta");

let alphaValue = 61;
let betaValue = 45;

setInterval(() => {
  alphaValue += Math.random() * 1.2;
  betaValue += Math.random() * 1.0;

  if (alphaValue > 100) alphaValue = 100;
  if (betaValue > 100) betaValue = 100;

  alpha.style.width = alphaValue + "%";
  beta.style.width = betaValue + "%";
}, 2000);