console.log("hello World");
// Variables
const popUp = document.querySelector("aside");
const article = document.querySelector("article");
const discordYes = document.querySelector(".discord__yes");
const discordNo = document.querySelector(".discord__no");
const main = document.querySelectorAll("main");
const nav = document.querySelectorAll("nav div");
const logo = document.querySelector(".logo__img");
// Functions
const showPopUp = () => {
  setTimeout(() => {
    popUp.classList.remove("hidden");
    article.classList.add("blur");
  }, 5000);
};
const hidePopUp = () => {
  popUp.classList.add("hidden");
  article.classList.remove("blur");
};
const changePage = () => {
  for (i = 0; i < nav.length - 1; i++) {
    if (nav[i].classList.contains("active")) {
      main[i + 1].classList.remove("hidden");
      if (i + 1 === 1) {
        main[0].classList.add("hidden");
        main[2].classList.add("hidden");
        main[3].classList.add("hidden");
      } else if (i + 1 === 2) {
        main[0].classList.add("hidden");
        main[1].classList.add("hidden");
        main[3].classList.add("hidden");
      } else if (i + 1 === 3) {
        main[0].classList.add("hidden");
        main[1].classList.add("hidden");
        main[2].classList.add("hidden");
      }
    }
  }
  if (nav[0].classList.contains("active")) {
    nav[1].classList.remove("active");
    nav[2].classList.remove("active");
  } else if (nav[1].classList.contains("active")) {
    nav[0].classList.remove("active");
    nav[2].classList.remove("active");
  } else if (nav[2].classList.contains("active")) {
    nav[0].classList.remove("active");
    nav[1].classList.remove("active");
  }
};
const autoReset = () => {
  setTimeout(() => {
    for (l = 0; l < 3; l++) {
      nav[l].classList.remove("active");
    }
  }, 100);
};
const reset = () => {
  logo.addEventListener("click", () => {
    for (k = 1; k < main.length; k++) {
      main[k].classList.add("hidden");
      nav[k - 1].classList.remove("active");
    }
    main[0].classList.remove("hidden");
  });
};
// AddEventListeners
discordYes.addEventListener("click", hidePopUp);
discordNo.addEventListener("click", hidePopUp);
for (i = 0; i < nav.length - 1; i++) {
  nav[i].addEventListener("click", (e) => {
    e.target.classList.add("active");
    console.log(e.target);
    changePage();
    autoReset();
  });
}
// Play
showPopUp();
reset();
