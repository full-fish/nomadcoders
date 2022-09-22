const back = document.querySelector("#back");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosesnImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("mid");
bgImage.classList.add("image");
bgImage.src = `img/${chosesnImage}`;
// document.querySelector("#body").style.backgroundImage = "url(0.jpg)"; 왜 안되지?

document.body.append(bgImage);
