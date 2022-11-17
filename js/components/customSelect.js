import Choices from "choices.js";

const initCustomSelect = () => {
	const customSelects = document.querySelectorAll(".select-custom__itself");

	if (customSelects.length) {
		Array.from(customSelects).forEach((select) => {
			const choices = new Choices(select, {
				searchEnabled: false,
				itemSelectText: "",
				shouldSort: false,
				position: "bottom",
			});
		});
	}
};

initCustomSelect();
