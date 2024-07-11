window.addEventListener("load", function () {
  const pg = document.getElementById("pg");
  const counter = document.getElementById("counter");
  const score = document.getElementById("score");
  let clickCount = 0;
  let speed = 900;
  var moving;
  let wasClicked = false;
  let hover = false;
  let hoverCount = 0;
  let hoverInterval;

  pg.addEventListener("click", function () {
    wasClicked = true;
    if(speed>300)
      speed-=100;
    clickCount=speed;
    counter.textContent = clickCount + "ms ";
    clearInterval(moving)
    moving = setInterval(move, speed);
  });

  pg.addEventListener("mouseover", function () {
    hover = true;
    if (wasClicked && !hoverInterval) {
      hoverInterval = setInterval(function () {
        if (hover) {
          hoverCount++;
          score.textContent = "Punti: " + hoverCount;
        }
      }, 10);
    }
  });

  pg.addEventListener("mouseleave", function () {
    hover = false;
    clearInterval(hoverInterval);
    hoverInterval = null;
  });

  function move() {
    pg.style.top = (Math.floor(Math.random() * 85) + 10) + '%';
    pg.style.left = (Math.floor(Math.random() * 85) + 10) + '%';
    hover = false;
  }
});
