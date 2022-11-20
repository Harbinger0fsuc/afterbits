const hideNavOnResize = () => {
	const menuMobile = document.querySelector(".nav");

	if (menuMobile) {
		window.addEventListener("resize", function () {
			if (this.innerWidth >= 1024) {
				menuMobile.classList.remove("is-visible");
			}
		});
	}
};

hideNavOnResize();
