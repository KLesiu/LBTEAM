console.log("hello World");
// Variables
const popUp = document.querySelector("aside");
const article = document.querySelector("article");
const discordYes = document.querySelector(".discord__yes");
const discordNo = document.querySelector(".discord__no");
const main = document.querySelectorAll("main");
const nav = document.querySelectorAll("nav div");
const logo = document.querySelector(".logo__img");
const squadPage = document.querySelector(".squad__page");
const leftArrow = document.querySelector(".left");

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
const modal = (squadPage = {}) => {
  return `<h2>Squad</h2>
  <div class="squad__members">
    <h3>Założyciel</h3>
    <div class="members__holder gold">
      <ul>
        <li>
          <h4>${squadPage.nickName}</h4>
          <div class="members__socials">${
            squadPage.firstSocial || "<i class='icon-instagram'></i>"
          }</div>
          <div class="members__socials">${
            squadPage.secondSocial || "<i class='icon-snapchat'></i>"
          }</div>
          <div class="members__socials">${
            squadPage.thirdSocial || "<i class='icon-note'></i>"
          }</div>
        </li>
      </ul>
      <div class="ranks">
        <a class="lol"
          title="Riot Games (Q1060165), Public domain, via Wikimedia Commons"
          
          ><img style="margin-top: 30px;
          padding: 20px;"
            width="256"
            alt="League of Legends 2019 vector"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/256px-League_of_Legends_2019_vector.svg.png"
        /></a>
        <a
        class="csgo"
        title="by GeMet, with help from Sertion., Public domain, via Wikimedia Commons"
        style="width:50%"
        ><img 
          style="
          margin-top: 30px;
          padding: 20px;
            background-color: rgba(194, 155, 59, 255);
            padding: 30px;
            border-radius: 20px;
            width:90%;
          "
          width="256"
          alt="Counter-Strike Global Offensive"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Counter-Strike_Global_Offensive.svg/256px-Counter-Strike_Global_Offensive.svg.png"
      /></a>
        <div class="showLOL hidden">${squadPage.roleLol || ""}</div>
    
        <div class="showLOL hidden">${squadPage.rankLol || ""}</div>
        <div class="showCSGO hidden" style="width: 40%;">${
          squadPage.rankCsgo || ""
        }</div>
      </div>
    </div>
  </div>
  `;
};
const createSquadMembers = (value) => {
  const squadContainer = document.createElement("div");
  squadContainer.className = "container";
  squadContainer.innerHTML = modal(value);
  squadPage.appendChild(squadContainer);
};
const create = () => {
  createSquadMembers({
    nickName: "ZUGI",
    firstSocial: "<i class='icon-instagram'></i>",
    secondSocial: "<i class='icon-snapchat'></i>",
    thirdSocial: "<i class='icon-note'></i>",
    roleLol: `<img  src=img/sup.png />`,
    rankLol: `<img  src=img/bronze.png />`,
    rankCsgo: `<img  src=img/mg1.png />`,
  });
  const showRanks = () => {
    const showLolRanks = document.querySelector(".lol");
    const showCsgoRank = document.querySelector(".csgo");
    showLolRanks.addEventListener("click", () => {
      const showLOL = document.querySelectorAll(".showLOL");
      showLOL[0].classList.toggle("hidden");
      showLOL[1].classList.toggle("hidden");
    });
    showCsgoRank.addEventListener("click", () => {
      const showCSGO = document.querySelector(".showCSGO");
      showCSGO.classList.toggle("hidden");
    });
  };
  showRanks();
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
// showPopUp();
reset();
create();
