// UI rendering will live here

function renderDuels() {
  const container = document.getElementById("duelList");
  if (!container) return;

  container.innerHTML = "";

  duels.forEach(duel => {
    const progressA = (duel.teamA.marketCap / duel.cap) * 100;
    const progressB = (duel.teamB.marketCap / duel.cap) * 100;

    const card = document.createElement("div");
    card.className = "duel-card";

    card.innerHTML = `
      <div class="team">
        ${duel.teamA.name}
        <div class="bar">
          <div class="fill" style="width:${progressA}%"></div>
        </div>
        <small>$${duel.teamA.marketCap}</small>
      </div>

      <div class="vs">VS</div>

      <div class="team">
        ${duel.teamB.name}
        <div class="bar">
          <div class="fill" style="width:${progressB}%"></div>
        </div>
        <small>$${duel.teamB.marketCap}</small>
      </div>
    `;

    card.onclick = () => {
      window.location.href = `duel.html?id=${duel.id}`;
    };

    container.appendChild(card);
  });
}
