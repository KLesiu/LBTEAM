const news = document.querySelector(".news");
const dateNews = document.querySelector(".news h3");
const pNews = document.querySelector(".news p");
const buttonDown = document.querySelector(".down");
const buttonUp = document.querySelector(".up");
const newsHolder = ["Bla bla bla bla", "<b title=siema>Hej hej hej hej </b>"];
const dateHolder = ["Data publikacji:22.12.2022", "Data publikacji: 21212"];
let n = 0;
const switchNews = () => {
  pNews.innerHTML = newsHolder[n];
  dateNews.innerHTML = dateHolder[n];
};
buttonUp.addEventListener("click", () => {
  n += 1;
  switchNews();
});
buttonDown.addEventListener("click", () => {
  n -= 1;
  switchNews();
});
