let body = document.querySelector("body");

window.addEventListener("resize", eventHandlerRsize);
function eventHandlerRsize() {
  let innerWidth = window.innerWidth;
  document.querySelector(".width").textContent = innerWidth;
  if (innerWidth < 600) body.className = "blue";
  else if (600 <= innerWidth && innerWidth < 1000) body.className = "purple";
  else body.className = "yellow";
}
