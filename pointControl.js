const pointView = document.querySelector("#point");
const pointUpButton = document.querySelector("#pointUp");
const pointDownButton = document.querySelector("#pointDown");
const resetButton = document.querySelector("#reset");
let point = 0;

pointUpButton.addEventListener("click", function() {
  point += 10;
  pointView.textContent = point;
  pointCheck();
});

pointDownButton.addEventListener("click", function() {
  point -= 10;
  pointView.textContent = point;
  pointCheck();
});

resetButton.addEventListener("click", function() {
  point = 0;
  pointView.textContent = point;
  pointView.style.color = "black";
});

function pointCheck() {
  if (point >= 50) {
    pointView.style.color = "red";
  } else if (point < 50 && point >= 0) {
    pointView.style.color = "black";
  } else {
    pointView.style.color = "blue";
  }
}
