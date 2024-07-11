window.addEventListener("load", function () {
  const pg = document.getElementById("pg");
  const counter = document.getElementById("counter");
  let clickCount = 0;
  let speed = 800;
  var moving;

  pg.addEventListener("click", function () {
    clickCount=speed;
    counter.textContent = clickCount + "ms";
    if(speed>200)
      speed-=100;
    clearInterval(moving)
    moving = setInterval(move, speed);
  });

  function move() {
    pg.style.top = (Math.floor(Math.random() * 85) + 10) + '%';
    pg.style.left = (Math.floor(Math.random() * 85) + 10) + '%';
  }
});
