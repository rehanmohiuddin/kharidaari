const carousel_img = document.getElementById("carousel-img");
const images = [
  "e7794138694a2058.jpg",
  "1f4b8cabe98448eb.jpg",
  "3a7f2c936f8fff7c.jpg",
  "c3dc664f-41cf-408c-8932-c35648d92bc21644236787840-Kurtas_Dk.webp",
  "3a7f2c936f8fff7c.jpg",
];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let Ind = 0,
  prevInd = 0;
setInterval(() => {
  const num = Ind;
  carousel_img.src = "./Assets/Images/" + images[num];
  prevInd = Ind;
  Ind = Ind >= 4 ? 0 : Ind + 1;
  document
    .getElementById("carousel-img-" + Ind)
    .classList.add("carousel-btn-clicked");
  document
    .getElementById("carousel-img-" + prevInd)
    .classList.remove("carousel-btn-clicked");
}, 2000);
