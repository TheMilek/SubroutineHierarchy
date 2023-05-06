const circle1 = document.querySelectorAll(".circle1");
const circle2 = document.querySelectorAll(".circle2")
let rotationAngle = 0;
let rotationIntervalId;

function startRotation() {
  rotationIntervalId = setInterval(() => {
    rotationAngle += 10;
    circle1.forEach(circle => {
        circle.style.transform = `rotate(${rotationAngle}deg)`;
    })
    circle2.forEach(circle => {
        circle.style.transform = `rotate(${rotationAngle}deg)`;
    })

  }, 50);
}

function stopRotation() {
  clearInterval(rotationIntervalId);
}

const rotateButton = document.querySelector(".rotate");
rotateButton.addEventListener("click", () => {
  if (rotateButton.classList.contains("rotating")) {
    rotateButton.textContent = "Start Rotation";
    rotateButton.classList.remove("rotating");
    stopRotation();
  } else {
    rotateButton.textContent = "Stop Rotation";
    rotateButton.classList.add("rotating");
    startRotation();
  }
});