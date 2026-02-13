const yesBtn = document.getElementById("yes");
const maybeBtn = document.getElementById("maybe");
const noBtn = document.getElementById("no");
const goSiteBtn = document.getElementById("goSite");
const music = document.getElementById("bgMusic");


/* Generate beating background hearts */
function createBackgroundHearts() {
  const bg = document.querySelector(".hearts-bg");

  for (let i = 0; i < 40; i++) {
    let heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDelay = Math.random() * 2 + "s";
    bg.appendChild(heart);
  }
}
createBackgroundHearts();

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  launchHearts();
  launchCupid();
  launchConfetti();
  goSiteBtn.style.display = "inline-block";
  music.play();
});

/* MAYBE CLICK */
maybeBtn.addEventListener("click", () => {
  maybeBtn.disabled = true;
  maybeBtn.innerText = "You know it's Yes 😌";
  yesBtn.style.transform = "scale(1.3)";
});

/* NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
});

/* Redirect */
goSiteBtn.addEventListener("click", () => {
  window.location.href = "http://morcirou.morcirou.lovestoblog.com/";
});

/* Floating hearts */
function launchHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 200);
}

/* Flying cupid */
function launchCupid() {
  let cupid = document.createElement("div");
  cupid.classList.add("cupid");
  cupid.innerHTML = "🏹💘";
  document.body.appendChild(cupid);
}

/* Confetti */
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = ["#ff4d6d","#ffc2d1","#ffffff"][Math.floor(Math.random()*3)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
