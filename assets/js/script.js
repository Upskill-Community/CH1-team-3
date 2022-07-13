const links = document.querySelector(".nav-list");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

links.addEventListener("click", () => {
	links.classList.remove("show-links");
});

const date = document.getElementById("date");
const currentYear = new Date().getFullYear();
date.innerHTML = currentYear;
