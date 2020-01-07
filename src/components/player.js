export class Player {
	constructor() {
		this.audio = document.createElement('audio');
		this.audio.controls = true;
		document.body.prepend(this.audio)
		this.audio.addEventListener("play", () => {
			if (!this.context) this.initContext();
			this.receiveFrequencyData();
		})
		this.audio.addEventListener("pause", () => {
			window.cancelAnimationFrame(this.animationFrameId);
		})
	}

	loadTrack(url) {
		return new Promise((resolve, reject) => {
			this.audio.addEventListener("canplay", () => {
				resolve();
			});
			/* Reject the promise on an error. */
			this.audio.addEventListener("error", reject);
			this.audio.src = url;
		});
	}

	initContext() {
		this.context = new (window.AudioContext ||
			window.webAudioContext ||
			window.webkitAudioContext)();
		this.source = this.context.createMediaElementSource(this.audio);
		this.source.controls = true;

		this.audio.onended = function() {
			this.source.disconnect();
			this.source = null;
		};
		this.analyser = this.context.createAnalyser();

		this.analyser.fftSize = 256;
		this.source.connect(this.context.destination);
		this.source.connect(this.analyser);

		this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
	}

	play() {
		if (this.audio.paused) {
			this.audio.play();
		} else {
			this.audio.pause();
		}
	}

	receiveFrequencyData = () => {
		this.animationFrameId = requestAnimationFrame(this.receiveFrequencyData);
		this.analyser.getByteFrequencyData(this.frequencyData);
		if (this.subscriber) this.subscriber(this.frequencyData);
	};

	subscribe(cb) {
		this.subscriber = cb;
	}
}