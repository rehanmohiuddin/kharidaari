const navBarIcon = document.getElementById("nav-bar-icon");
const navContainer = document.getElementById("nav-sm-container");
navBarIcon.onclick = () =>
  (navContainer.style.display =
    navContainer.style.display === "none" ? "flex" : "none");

const filterBtn = document.getElementById("filter-btn");
const filterContainer = document.getElementById("filter-container");
const filerCloseBtn = document.getElementsByClassName("fa-window-close")[0];
filterBtn.onclick = () => (filterContainer.style.display = "block");
filerCloseBtn.onclick = () => (filterContainer.style.display = "none");
