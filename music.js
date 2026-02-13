
document.addEventListener("DOMContentLoaded", function () {

  const intro = document.getElementById("intro");
  const music = document.getElementById("bgMusic");

  // Drop modal in after slight delay
  setTimeout(() => {
    intro.classList.add("show");
  }, 200);

  // Click to start
  intro.addEventListener("click", () => {

    // Play music (browser safe because it's inside click)
    if (music) {
      music.play().catch(() => {});
    }

    // Fade modal out
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
    }, 800);

  });

});
