import string from "./css.js";

const player = {
	id: undefined,
	n: 1,
	time: 100,
	ui: {
		demo: document.querySelector("#demo"),
		demo2: document.querySelector("#demo2"),
		btnPlay: document.querySelector("#btnPlay"),
		btnPause: document.querySelector("#btnPause"),
		btnReplay: document.querySelector("#btnReplay"),
		btnSlow: document.querySelector("#btnSlow"),
		btnNormal: document.querySelector("#btnNormal"),
		btnFast: document.querySelector("#btnFast"),
	},
	events: {
		"#btnPause": "pause",
		"#btnPlay": "play",
		"#btnReplay": "replay",
		"#btnSlow": "slow",
		"#btnNormal": "normal",
		"#btnFast": "fast",
	},
	init: () => {
		player.ui.demo.innerText = string.substr(0, player.n);
		player.ui.demo2.innerHTML = string.substr(0, player.n);
		player.bindEvents();
		player.play();
	},
	bindEvents: () => {
		for (let key in player.events) {
			if (player.events.hasOwnProperty(key)) {
				const value = player.events[key];
				document.querySelector(key).onclick = player[value];
			}
		}
	},
	run: () => {
		player.n += 1;
		if (player.n > string.length) {
			window.clearInterval(player.id);
			player.ui.btnReplay.style = "display: block";
			player.ui.btnPause.style = "display: none";
			player.ui.btnSlow.style = "display: none";
			player.ui.btnNormal.style = "display: none";
			player.ui.btnFast.style = "display: none";
			return;
		}
		player.ui.demo.innerText = string.substr(0, player.n);
		player.ui.demo2.innerHTML = string.substr(0, player.n);
		player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
	},
	play: () => {
		player.ui.btnPlay.style = "display: none";
		player.ui.btnPause.style = "display: block";
		player.ui.btnReplay.style = "display: none";
		player.id = setInterval(player.run, player.time);
	},
	replay: () => {
		player.ui.btnPlay.style = "display: none";
		player.ui.btnPause.style = "display: block";
		player.ui.btnReplay.style = "display: none";
		player.ui.btnSlow.style = "display: block";
		player.ui.btnNormal.style = "display: block";
		player.ui.btnFast.style = "display: block";
		player.n = 1;
		player.play();
	},
	pause: () => {
		player.ui.btnPlay.style = "display: block";
		player.ui.btnPause.style = "display: none";
		player.ui.btnReplay.style = "display: none";
		window.clearInterval(player.id);
	},
	slow: () => {
		player.pause();
		player.time = 300;
		player.play();
	},
	normal: () => {
		player.pause();
		player.time = 100;
		player.play();
	},
	fast: () => {
		player.pause();
		player.time = 0;
		player.play();
	},
};

player.init();
