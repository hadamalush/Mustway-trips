const btnNavi = document.getElementById("navBtn");
const navMenu = document.getElementById("navMenu");
const navItems = document.querySelectorAll("a.nav__item");

const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

console.log(navItems);

btnNavi.addEventListener("click", () => {
	navMenu.classList.toggle("nav--active");

	navItems.forEach(el => {
		el.classList.add("nav-items-animation");
		el.addEventListener("click", () => {
			navMenu.classList.remove("nav--active");

			navItems.forEach(item => {
				item.classList.remove("nav-items-animation");
			});
		});
	});
});

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		}
	});

	console.log(currentSection);
};

handleObserver();

const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};

handleCurrentYear();
