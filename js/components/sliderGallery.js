import Swiper, { Grid, Navigation } from "swiper";

const initSliderGallery = () => {
	const sliderGallery = document.querySelectorAll(".slider-gallery");

	if (sliderGallery.length > 0) {
		Array.from(sliderGallery).forEach((slider) => {
			const arrows = document.getElementById(slider.getAttribute("data-arrows"));
			const prev = arrows.querySelector(".arrows-main__btn--prev");
			const next = arrows.querySelector(".arrows-main__btn--next");
			const config = {
				modules: [Grid, Navigation],
				slidesPerView: 3,
				spaceBetween: 30,
				grid: {
					rows: 2,
					fill: "row",
				},
				navigation: {
					prevEl: "",
					nextEl: "",
				},
			};

			config.navigation.prevEl = prev;
			config.navigation.nextEl = next;

			const swiper = new Swiper(slider, config);
		});
	}
};

initSliderGallery();
