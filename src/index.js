let openKey, closeKeyOne, closeKeyTwo;

function openMenu() {
  const menu = document.querySelector("aside");
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
  }
}

function closeMenu() {
  const menu = document.querySelector("aside");
  if (!menu.classList.contains("hide")) {
    menu.classList.add("hide");
  }
}

const menuOpenHandler = (e) => {
  e.preventDefault();
  openMenu();
  //   document
  //     .getElementById("open-menu")
  //     .removeEventListener("click", menuOpenHandler);
  //   document
  //     .getElementById("close-menu")
  //     .addEventListener("click", menuCloseHandler);
  //   closeKeyTwo = document
  //     .querySelector("html")
  //     .addEventListener("click", menuCloseHandler);
  //   document.addEventListener("click", e);
};

const menuCloseHandler = (e) => {
  e.preventDefault();
  closeMenu();
//   document
//     .getElementById("close-menu")
//     .removeEventListener("click", menuCloseHandler);
//   document.querySelector("html").removeEventListener("click", menuCloseHandler);

//   document
//     .getElementById("open-menu")
//     .addEventListener("click", menuOpenHandler);
};

document.getElementById("open-menu").addEventListener("click", menuOpenHandler);
document
  .getElementById("close-menu")
  .addEventListener("click", menuCloseHandler);
document.querySelector("aside").addEventListener("click", menuCloseHandler);
