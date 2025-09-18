// Body style
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, #ff9900, #cc3300)";
document.body.style.fontFamily = "Arial, sans-serif";

// Clock container
let clock = document.getElementById("clock");
clock.style.display = "flex";
clock.style.gap = "30px";
clock.style.background = "#ffb733";
clock.style.padding = "30px 50px";
clock.style.borderRadius = "12px";
clock.style.boxShadow = "0px 4px 20px rgba(0,0,0,0.3)";

// Card yaratish function
function createCard(id, label) {
  let card = document.createElement("div");
  card.style.background = "#111";
  card.style.color = "#fff";
  card.style.padding = "30px 50px";
  card.style.borderRadius = "10px";
  card.style.textAlign = "center";
  card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.7)";

  let time = document.createElement("div");
  time.id = id;
  time.style.fontSize = "48px";
  time.style.fontWeight = "bold";
  time.textContent = "00";

  let lbl = document.createElement("div");
  lbl.textContent = label;
  lbl.style.marginTop = "10px";
  lbl.style.fontSize = "16px";
  lbl.style.color = "#bbb";

  card.appendChild(time);
  card.appendChild(lbl);
  clock.appendChild(card);
}

// Uchta card yaratamiz
createCard("hours", "Hours");
createCard("minutes", "Minutes");
createCard("seconds", "Seconds");

// Soatni yangilash function
function updateClock() {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Har sekundda yangilash
setInterval(updateClock, 1000);
updateClock();