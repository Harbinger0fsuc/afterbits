import flatpickr from "flatpickr";

const initCustomDatepicker = () => {
	const datepickers = document.querySelectorAll(".custom-datepicker__itself");

	if (datepickers.length > 0) {
		[...datepickers].forEach((picker) => {
			flatpickr(picker, {
				altInput: true,
				altFormat: "j F, Y",
				dateFormat: "Y-m-d",
			});
		});
	}
};

initCustomDatepicker();
