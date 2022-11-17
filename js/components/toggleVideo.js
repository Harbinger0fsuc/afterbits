const toggleVideo = () => {
	const videoTogglers = document.querySelectorAll(".js-play-video-btn");

	if (videoTogglers.length > 0) {
		[...videoTogglers].forEach((toggler) => {
			const videoBlock = toggler.closest(".block-video");
			const videoItself = videoBlock.querySelector(".block-video__itself");
			const videoBlockControls = videoBlock.querySelector(".block-video-controls");

			function togglePlay() {
				if (videoItself.paused || videoItself.ended) {
					videoItself.play();
				} else {
					videoItself.pause();
				}
			}

			toggler.addEventListener("click", togglePlay);

			videoItself.addEventListener("playing", function() {
				videoBlockControls.classList.add("is-hidden");
				this.setAttribute("controls", true);
			});

			videoItself.addEventListener("ended", function() {
				videoBlockControls.classList.remove("is-hidden");
				this.removeAttribute("controls");
				this.load();
			});
		});
	}
};

toggleVideo();
