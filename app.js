console.log("hello World");
// Variables
const popArt = document.querySelector("aside");
const article = document.querySelector("article");
const discordYes = document.querySelector(".discord__yes");
const discordNo = document.querySelector(".discord__no");

// Functions
const showPopArt = () => {
  setTimeout(() => {
    popArt.classList.remove("hidden");
    article.classList.add("blur");
  }, 5000);
};
const hidePopArt = () => {
  popArt.classList.add("hidden");
  article.classList.remove("blur");
};
// AddEventListeners
discordYes.addEventListener("click", hidePopArt);
discordNo.addEventListener("click", hidePopArt);
// Play
showPopArt();
