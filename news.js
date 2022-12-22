const news = document.querySelector(".news");
const dateNews = document.querySelector(".news h3");
const pNews = document.querySelector(".news p");
const buttonDown = document.querySelector(".down");
const buttonUp = document.querySelector(".up");
const newsHolder = [
  "<h4>To już dzisiaj</h4><p>Od dzisiaj zaczynamy nasz świąteczny turniej wszystkich zainteresowanych zapraszamy na naszego discorda. Terminarz znajduję się na naszym discordzie oraz w sekcji ,,Ranking w grach''",
];
const dateHolder = ["Data publikacji: 22.12.2022"];
let n = newsHolder.length - 1;
const switchNews = () => {
  pNews.innerHTML = newsHolder[n];
  dateNews.innerHTML = dateHolder[n];
};
buttonUp.addEventListener("click", () => {
  if (n >= newsHolder.length - 1) {
    alert("Nie mamy więcej ogłoszeń");
  } else {
    n += 1;
    switchNews();
  }
});
buttonDown.addEventListener("click", () => {
  if (n <= 0) {
    alert("Nie mamy więcej ogłoszeń");
  } else {
    n -= 1;
    switchNews();
  }
});
switchNews();
