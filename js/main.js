const btnNavi = document.getElementById("navBtn");
const navMenu = document.getElementById("navMenu");
const navItems = document.querySelectorAll("a.nav__item");

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

console.log(btnNavi);
