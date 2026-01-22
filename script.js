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

const connectBtn = document.getElementById("connectWallet");

let walletAddress = null;

async function connectWallet() {
  try {
    if (window.solana && window.solana.isPhantom) {
      const response = await window.solana.connect();
      walletAddress = response.publicKey.toString();

      connectBtn.innerText = walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4);
      connectBtn.style.background = "#16a34a";

      console.log("Connected wallet:", walletAddress);
    } else {
      alert("Phantom Wallet not found. Please install it.");
      window.open("https://phantom.app/", "_blank");
    }
  } catch (err) {
    console.log("Wallet connection rejected");
  }
}

connectBtn.addEventListener("click", connectWallet);

connectBtn.disabled = true;

setInterval(() => {
  aCap += Math.floor(Math.random() * 1000);
  bCap += Math.floor(Math.random() * 1000);

  animateCurve("curveA", 0, Math.min(aCap, cap));
  animateCurve("curveB", 0, Math.min(bCap, cap));

  capA.innerText = `$${aCap}`;
  capB.innerText = `$${bCap}`;

}, 1000);

