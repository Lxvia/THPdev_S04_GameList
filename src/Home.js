import { PageList } from "./PageList";
const showMoreBtn = document.getElementById("showMore");
const selectblock = document.querySelector("select");
const selectResult = document.querySelector("#select");
const welcomeContainer = document.querySelector(".welcome-container");

const Home = (argument = "") => {
  console.log(selectblock);
  const searchBtn = document.getElementById("btnSearch");
  const searchBar = document.getElementById("search-bar");
  const landingPage = document.getElementById("landing-page");
  let numberOfPages = 0;

  let landingPageArgument = `&dates=2022-07-01,2023-07-30&ordering=-added`;
  landingPage.insertAdjacentHTML = `<h3>Welcome to THProgame</h3>
  <p class="page-description">THProgame allows you to learn all about videogames releases</p>
  `;
  PageList(landingPageArgument);

  searchBtn.addEventListener("click", () => {
    // console.log(searchBar.value);
    PageList(searchBar.value);
  });

  selectblock.addEventListener("change", (event) => {
    event.preventDefault();
    // console.log(selectResult.value);
    let gameBlock = document.querySelectorAll("#container");
    // console.log(gameBlock);
    if (selectResult.value != "Any") {
      gameBlock.forEach((element) => {
        element.style.display = "block";
        let gameBlockPlatforms = element.querySelector("#platforms");
        let gameBlockPlatformsHtml = gameBlockPlatforms.innerHTML.includes(
          selectResult.value
        );
        // console.log(gameBlockPlatforms.innerHTML);
        // console.log(gameBlockPlatformsHtml);
        if (!gameBlockPlatformsHtml) {
          element.style.display = "none";
        }
      });
    } else {
      gameBlock.forEach((element) => {
        element.style.display = "block";
      });
    }
  });
};

export { Home };
