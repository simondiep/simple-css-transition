const HALF_OF_CIRCLE_IN_PX = '25';

// Moves the circle element to the clicked location
function onClick(event) {
  const clickedXCoord = event.clientX;
  const clickedYCoord = event.clientY;
  const newCircleTopLeftXCoord = clickedXCoord - HALF_OF_CIRCLE_IN_PX;
  const newCircleTopLeftYCoord = clickedYCoord - HALF_OF_CIRCLE_IN_PX;
  const circle = document.getElementsByClassName("circle")[0];
  circle.style.transform = `translate(${newCircleTopLeftXCoord}px, ${newCircleTopLeftYCoord}px)`;
}

document.getElementById('container').onclick = onClick;
