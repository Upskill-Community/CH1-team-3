const links = document.querySelector(".nav-list");
const navBtnDOM = document.querySelector(".nav-btn");

navBtnDOM.addEventListener("click", () => {
	links.classList.toggle("show-links");
});
