// Toggle mobile navigation
const openMobNav = () => {
	const navTogglerBtn = document.querySelector(".js-tgl-nav");
	const menuMobile = document.querySelector(".nav");

	if (navTogglerBtn) {
		navTogglerBtn.addEventListener("click", function () {
			menuMobile.classList.add("is-visible");
		});
	}
};

openMobNav();
