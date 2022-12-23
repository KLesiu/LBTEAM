console.log("hello World");
// Variables
const popUp = document.querySelector("aside");
const body = document.querySelector("body");
const article = document.querySelector("article");
const discordYes = document.querySelector(".discord__yes");
const discordNo = document.querySelector(".discord__no");
const main = document.querySelectorAll("main");
const nav = document.querySelectorAll("nav div");
const logo = document.querySelector(".logo__img");
const squadPage = document.querySelector(".squad__page");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const squadContainer = document.createElement("div");
const squadAside = document.createElement("div");
const gallery = document.querySelector(".gallery");
const flakeImages = [`img/flake1.png`, `img/flake2.png`, `img/flake3.png`];
const offSnowButton = document.querySelector(".offSnow");
const historyButton = document.querySelector(".p__holder");

let members = 0;

// Functions
function renderSnowContainer() {
  const snowContainer = document.createElement("div");
  snowContainer.id = "snow__container";
  article.appendChild(snowContainer);
  return snowContainer;
}
function renderFlake(snowContainer) {
  const flakeContainer = document.createElement("div");
  flakeContainer.classList.add("flakes__container");
  flakeContainer.style.left = `${Math.random() * 100}%`;
  flakeContainer.style.transform = `scale(${Math.random() / 2})`;
  const flake = document.createElement("img");
  flake.src = flakeImages[Math.floor(Math.random() * flakeImages.length)];
  flakeContainer.appendChild(flake);
  snowContainer.appendChild(flakeContainer);
  setTimeout(renderFlake, 1000, snowContainer);
}
const snowContainerVar = renderSnowContainer();
function addAudioElement(snowContainer) {
  const audioElement = document.createElement("audio");
  audioElement.src = `jinglebells.mp3`;
  audioElement.volume = 0.05;
  audioElement.play();

  snowContainer.appendChild(audioElement);
}
const showPopUp = () => {
  setTimeout(() => {
    popUp.classList.remove("hidden");
    article.classList.add("blur");
    body.classList.add("overflow");
    window.scrollTo(0, 0);
  }, 15000);
};
const hidePopUp = () => {
  popUp.classList.add("hidden");
  article.classList.remove("blur");
  body.classList.remove("overflow");
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
  return `<h2 class="squad__h2">Squad</h2>
  <div class="squad__members">
    <h3>LBTEAM</h3>
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
      <button title="Pokaż gry, w które gra ${
        squadPage.nickName
      }"class="show__more-games"> Pokaż więcej gier </button>
      <div class="ranks">
        <a class="lol"
          title="Riot Games (Q1060165), Public domain, via Wikimedia Commons"
          
          ><img class="lol__img" 
            width="180"
            alt="League of Legends 2019 vector"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/256px-League_of_Legends_2019_vector.svg.png"
        /></a>
        <a
        class="csgo"
        title="by GeMet, with help from Sertion., Public domain, via Wikimedia Commons"
        style="width:50%"
        ><img class="csgo__img"
          
          
          alt="Counter-Strike Global Offensive"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Counter-Strike_Global_Offensive.svg/256px-Counter-Strike_Global_Offensive.svg.png"
      /></a>
        <div class="showLOL hidden">${squadPage.roleLol || ""}</div>
    
        <div class="showLOL hidden">${squadPage.rankLol || ""}</div>
        <div class="showCSGO hidden" >${squadPage.rankCsgo || ""}</div>
      </div>
    </div>
  </div>
  
  `;
};
const modalAside = (squadPage = {}) => {
  return `<h2>GIERKI</h2> <ul>
       <li>${squadPage.firstGame || ""}</li>
      <li>${squadPage.secondGame || ""}</li>
       <li>${squadPage.thirdGame || ""}</li>
       <li>${squadPage.fourthGame || ""}</li>
       <li>${squadPage.fifthGame || ""}</li>
       <li>${squadPage.sixthGame || ""}</li>
       <li>${squadPage.seventhGame || ""}</li>
      <li>${squadPage.eighthGame || ""}</li>
       <li>${squadPage.ninthGame || ""}</li>
       <li>${squadPage.tenthGame || ""}</li>

       </ul>`;
};
const createSquadMembers = (value) => {
  squadContainer.className = "container";
  squadContainer.innerHTML = modal(value);
  squadAside.className = "aside";
  squadAside.classList.add("aside__squad");
  squadAside.classList.add("hidden");
  leftArrow.setAttribute("style", "left:20%");
  rightArrow.setAttribute("style", "right:20%");
  squadAside.innerHTML = modalAside(value);
  squadPage.appendChild(squadContainer);
  squadPage.appendChild(squadAside);
  const showMoreGames = document.querySelector(".show__more-games");
  showMoreGames.addEventListener("click", () => {
    squadAside.classList.toggle("hidden");
    if (squadAside.classList.contains("hidden")) {
      leftArrow.setAttribute("style", "left:20%");
      rightArrow.setAttribute("style", "right:20%");
    } else {
      leftArrow.setAttribute("style", "left:7%");
      rightArrow.setAttribute("style", "right:34%");
    }
  });
};
const create = () => {
  if (members == 0) {
    createSquadMembers({
      nickName: "ZUGI",
      firstSocial: "<i class='icon-instagram'></i>",
      secondSocial: "<i class='icon-snapchat'></i>",
      thirdSocial:
        "<a href='https://www.tiktok.com/@x_dawid1337_x' target='_blank'><i class='icon-note'></i></a>",
      roleLol: `<img  src=img/jgl.png />`,
      rankLol: `<img  src=img/bronze.png />`,
      rankCsgo: `<img  src=img/dmg.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Minecraft`,
      fourthGame: `Rocket League`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Shakes & Fidget`,
      eighthGame: `Valorant`,
    });
  } else if (members == 1) {
    createSquadMembers({
      nickName: "LESIUUU",
      firstSocial:
        "<a target='_blank' href='https://github.com/KLesiu'><i class='icon-github-squared'></i></a>",
      secondSocial:
        "<a href='https://steamcommunity.com/id/lesiu123/' target='_blank'><i class='icon-steam-squared'></i></a>",
      thirdSocial: `?`,
      roleLol: `<img  src=img/top.png />`,
      rankLol: `<img  src=img/silver.png />`,
      rankCsgo: `<img src=img/le.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Among Us`,
      fourthGame: `Rocket League`,
    });
  } else if (members == 2) {
    createSquadMembers({
      nickName: "VARKUS",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img  src=img/top.png />`,
      rankLol: `<img  src=img/gold.png />`,
      rankCsgo: `<img src=img/lem.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Minecraft`,
      fourthGame: `Rocket League`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Valorant`,
    });
  } else if (members == 3) {
    createSquadMembers({
      nickName: "Chulbull",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img  src=img/mid.png />`,
      rankLol: `<img  src=img/silver.png />`,
      rankCsgo: `<img src=img/dmg.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Fifa`,
      fourthGame: `Among Us`,
      fifthGame: `GTA V`,
      sixthGame: `Valorant`,
    });
  } else if (members == 4) {
    createSquadMembers({
      nickName: "R3IO",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img src=img/adc.png />`,
      rankLol: `<img src=img/bronze.png />`,
      rankCsgo: `<img src=img/dmg.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Fifa`,
      fourthGame: `Rocket League`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Shakes & Fidget`,
      eighthGame: `Valorant`,
      ninthGame: `Minecraft`,
    });
  } else if (members == 5) {
    createSquadMembers({
      nickName: "M4KOWSKI",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img  src=img/mid.png />`,
      rankLol: `<img  src=img/silver.png />`,
      rankCsgo: `<img src=img/dmg.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Minecaft`,
      fourthGame: `Rocket League`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Shakes & Fidget`,
      eighthGame: `Valorant`,
    });
  } else if (members == 6) {
    createSquadMembers({
      nickName: "SINEQ",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img src=img/adc.png />`,
      rankLol: `?`,
      rankCsgo: `<img src=img/dmg.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Minecaft`,
      fourthGame: `Valorant`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Shakes & Fidget`,
    });
  } else if (members == 7) {
    createSquadMembers({
      nickName: "G3ZM0",
      firstSocial: "?",
      secondSocial: "?",
      thirdSocial: `?`,
      roleLol: `<img src=img/adc.png />`,
      rankLol: `<img src=img/bronze.png />`,
      rankCsgo: `<img src=img/lem.png />`,
      firstGame: `Counter Strike Global Offensive`,
      secondGame: `League Of Legends`,
      thirdGame: `Minecaft`,
      fourthGame: `Rocket League`,
      fifthGame: `Among Us`,
      sixthGame: `GTA V`,
      seventhGame: `Shakes & Fidget`,
      eighthGame: `Valorant`,
    });
  }
  const showRanks = () => {
    const showLolRanks = document.querySelector(".lol");
    const showCsgoRank = document.querySelector(".csgo");
    showLolRanks.addEventListener("click", () => {
      const showLOL = document.querySelectorAll(".showLOL");
      const showCSGO = document.querySelector(".showCSGO");
      showLOL[0].classList.toggle("hidden");
      showLOL[1].classList.toggle("hidden");
      showCSGO.classList.add("hidden");
      showLolRanks.classList.remove("opacity");
      showCsgoRank.classList.add("opacity");
      if (
        showCSGO.classList.contains("hidden") &&
        showLOL[0].classList.contains("hidden")
      ) {
        showCsgoRank.classList.remove("opacity");
        showLolRanks.classList.remove("opacity");
      }
    });
    showCsgoRank.addEventListener("click", () => {
      const showLOL = document.querySelectorAll(".showLOL");
      const showCSGO = document.querySelector(".showCSGO");
      showCSGO.classList.toggle("hidden");
      showLOL[0].classList.add("hidden");
      showLOL[1].classList.add("hidden");
      showLolRanks.classList.add("opacity");
      showCsgoRank.classList.remove("opacity");
      if (
        showCSGO.classList.contains("hidden") &&
        showLOL[0].classList.contains("hidden")
      ) {
        showCsgoRank.classList.remove("opacity");
        showLolRanks.classList.remove("opacity");
      }
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
rightArrow.addEventListener("click", () => {
  if (members < 7) {
    members += 1;
  } else {
    members = 0;
  }
  console.log(members);

  create();
});
leftArrow.addEventListener("click", () => {
  if (members < 7 && members > 0) {
    members -= 1;
  } else if (members == 0) {
    members = 7;
  } else {
    members = 0;
  }
  console.log(members);
  create();
});
nav[1].addEventListener("click", () => {
  createSquadMembers({
    nickName: "ZUGI",
    firstSocial:
      "<a href='https://www.instagram.com/dawid_ehh/' target='_blank' ><i class='icon-instagram'></i></a>",
    secondSocial: "<i title='dawidgoodboyxd' class='icon-snapchat'></i>",
    thirdSocial:
      "<a href='https://www.tiktok.com/@x_dawid1337_x' target='_blank'><i class='icon-note'></i></a>",
    roleLol: `<img  src=img/jgl.png />`,
    rankLol: `<img  src=img/bronze.png />`,
    rankCsgo: `<img  src=img/dmg.png />`,
    firstGame: `Counter Strike Global Offensive`,
    secondGame: `League Of Legends`,
    thirdGame: `Minecraft`,
    fourthGame: `Rocket League`,
    fifthGame: `Among Us`,
    sixthGame: `GTA V`,
    seventhGame: `Shakes & Fidget`,
    eighthGame: `Valorant`,
  });

  const showRanks = () => {
    const showLolRanks = document.querySelector(".lol");
    const showCsgoRank = document.querySelector(".csgo");
    showLolRanks.addEventListener("click", () => {
      const showLOL = document.querySelectorAll(".showLOL");
      const showCSGO = document.querySelector(".showCSGO");
      showLOL[0].classList.toggle("hidden");
      showLOL[1].classList.toggle("hidden");
      showCSGO.classList.add("hidden");
      showLolRanks.classList.remove("opacity");
      showCsgoRank.classList.add("opacity");
      if (
        showCSGO.classList.contains("hidden") &&
        showLOL[0].classList.contains("hidden")
      ) {
        showCsgoRank.classList.remove("opacity");
        showLolRanks.classList.remove("opacity");
      }
    });
    showCsgoRank.addEventListener("click", () => {
      const showLOL = document.querySelectorAll(".showLOL");
      const showCSGO = document.querySelector(".showCSGO");
      showCSGO.classList.toggle("hidden");
      showLOL[0].classList.add("hidden");
      showLOL[1].classList.add("hidden");
      showLolRanks.classList.add("opacity");
      showCsgoRank.classList.remove("opacity");
      if (
        showCSGO.classList.contains("hidden") &&
        showLOL[0].classList.contains("hidden")
      ) {
        showCsgoRank.classList.remove("opacity");
        showLolRanks.classList.remove("opacity");
      }
    });
  };
  showRanks();
});
gallery.addEventListener("click", () => {
  alert("Wkrótce dostępne");
});
offSnowButton.addEventListener("click", () => {
  offSnowButton.classList.toggle("active");
  if (offSnowButton.classList.contains("active")) {
    renderFlake(snowContainerVar);
    addAudioElement(snowContainerVar);
    offSnowButton.innerHTML = "Wyłącz śnieg";
  } else {
    window.setInterval(location.reload(true), x);
  }
});
historyButton.addEventListener("click", () => {
  main[0].classList.add("hidden");
  main[1].classList.remove("hidden");
  nav[0].classList.add("active");
});
// Play

showPopUp();
reset();
