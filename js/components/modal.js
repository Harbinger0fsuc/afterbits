const initModal = () => {
	const openModalBtn = document.querySelectorAll("[data-modal]");
	const closeModalBtns = document.querySelectorAll(".modal__close");
	const modalBackdrops = document.querySelectorAll(".modal__backdrop");
	const lockPadding = document.querySelectorAll(".lock-padding");
	const { body } = document;

	const animationDuration = 300;

	// Prevent body from jumping
	const lockBody = () => {
		const bodyScrollbarWidth = window.innerWidth - document.querySelector(".wrapper").offsetWidth;

		if (lockPadding.length > 0) {
			[...lockPadding].forEach((el) => {
				el.style.paddingRight = `${bodyScrollbarWidth}px`;
			});
		}

		body.style.paddingRight = `${bodyScrollbarWidth}px`;
		body.classList.add("overflow-hidden");
	};

	const bodyUnlock = () => {
		if (lockPadding.length > 0) {
			[...lockPadding].forEach((el) => {
				el.style.paddingRight = "";
			});
		}

		body.style.paddingRight = "";
		body.classList.remove("overflow-hidden");
	};

	// Function to close a modal
	const modalClose = (el, classToRemove = "is-visible") => {
		if (el) {
			el.classList.remove(classToRemove);
		}
	};

	// Function to open a modal
	const modalOpen = (el, classToAdd = "is-visible") => {
		if (el) {
			el.classList.add(classToAdd);
		}
	};

	// Open modal
	if (openModalBtn.length > 0) {
		[...openModalBtn].forEach((btn) => {
			btn.addEventListener("click", function(e) {
				e.preventDefault();

				const modalToOpen = document.querySelector(`${this.dataset.modal}`);

				modalOpen(modalToOpen, "is-visible");
				setTimeout(() => {
					lockBody();
				}, animationDuration);
			});
		});
	}

	// Close modal when clicking outside its content
	if (modalBackdrops.length > 0) {
		[...modalBackdrops].forEach((backdrop) => {
			backdrop.addEventListener("click", function (e) {
				const modalToClose = this.closest(".modal");

				modalClose(modalToClose, "is-visible");
				setTimeout(() => {
					bodyUnlock();
				}, animationDuration);
			});
		});
	}

	// Close modal when clicking on a close btn
	if (closeModalBtns.length > 0) {
		[...closeModalBtns].forEach((btn) => {
			btn.addEventListener("click", function (e) {
				e.preventDefault();

				const modalToClose = this.closest(".modal");

				modalClose(modalToClose, "is-visible");
				setTimeout(() => {
					bodyUnlock();
				}, animationDuration);
			});
		});
	}

	// Close modal when clicking escape button
	document.addEventListener("keydown", function (e) {
		if (e.which === 27) {
			const modalVisible = document.querySelector(".modal.is-visible");

			if (modalVisible) {
				modalVisible.classList.remove("is-visible");
			}

			setTimeout(() => {
				bodyUnlock();
			}, animationDuration);
		}
	});
};

initModal();
