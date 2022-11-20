const closeMobNav = () => {
	// Toggle mobile navigation
	const closeBtn = document.querySelector(".js-cls-nav");
	const nav = document.querySelector(".nav");

	if (closeBtn) {
		closeBtn.addEventListener("click", function () {
			nav.classList.remove("is-visible");
		});
	}

	document.addEventListener("click", function (e) {
		if (
			e.target.matches(".js-cls-nav") ||
			(!e.target.closest(".nav") && !e.target.closest(".js-tgl-nav"))
		) {
			nav.classList.remove("is-visible");
		}
	});
};

closeMobNav();
