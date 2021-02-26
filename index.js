const BASE_URL = "http://localhost:3000";
let user;
let mainContainer;
let dashboard;
let keyboard;
let soundSelector;
let userInfo;
let selectorContainer;
let userContainer;
let loginButton;
let registerButton;

let c;
let cSharp;
let d;
let dSharp;
let e;
let f;
let fSharp;
let g;
let gSharp;
let a;
let aSharp;
let b;

document.addEventListener("DOMContentLoaded", () => {
	mainContainer = document.querySelector(".main-container");
	dashboard = document.querySelector(".dashboard");
	keyboard = document.querySelector(".piano");
	selectorContainer = document.querySelector(".select-container");
	userContainer = document.querySelector(".user-container");
	soundSelector = document.querySelector(".selector");

	document.querySelector(".login").addEventListener("click", (e) => {
		e.preventDefault();
		renderLogin();
	});

	document.querySelector(".register").addEventListener("click", (e) => {
		e.preventDefault();
		renderRegister();
	});

	const registerUser = async (registerData) => {
		const res = await fetch(BASE_URL + "/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				registerData,
			}),
		});
		const data = await res.json();
		if (data.error) {
			alert(data.exception);
			return;
		}
		const { id, username } = data.user;
		const { title } = data.sound;
		user = new User(id, username, title);
		Keyboard.renderKeyboard();
		Keyboard.loadKeyboard(title);
		renderSelector();
		user.setUserDashboard();
	};

	const loginUser = async (loginData) => {
		const res = await fetch(BASE_URL + "/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				loginData,
			}),
		});
		const data = await res.json();
		if (data.error) {
			alert(data.status);
			return;
		}
		const { id, username } = data.user;
		const { title } = data.sound;
		user = new User(id, username, title);
		Keyboard.renderKeyboard();
		Keyboard.loadKeyboard(title);
		renderSelector();
		user.setUserDashboard();
	};

	renderRegister = () => {
		userContainer.innerHTML = `<div> username <input >  </input> <button class="register-submit"> submit</button> </div>`;
		userContainer.addEventListener("click", (e) => {
			if (e.target.className == "register-submit") {
				registerUser(userContainer.children[0].children[0].value);
			}
		});
	};

	renderLogin = () => {
		userContainer.innerHTML = `<div> username <input  >  </input> <button class="login-submit"> submit</button> </div>`;
		userContainer.addEventListener("click", (e) => {
			if (e.target.className == "login-submit") {
				loginUser(userContainer.children[0].children[0].value);
			}
		});
	};

	const renderSelector = () => {
		selectorContainer.style = "display: block";
	};

	const updateUserSound = async (soundId) => {
		const res = await fetch(BASE_URL + "/users/" + user.id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				soundId,
			}),
		});
		const data = await res.json();
		const { title } = data;
		user.sound = title;
		Keyboard.loadKeyboard(title);
	};

	soundSelector.addEventListener("change", (e) => {
		e.preventDefault();
		const soundId = e.target.value;
		updateUserSound(soundId);
	});

	keyboard = document.querySelector(".keyboard");

	keyboard.addEventListener("click", (event) => {
		event.preventDefault();

		const { id } = event.target;
		switch (id) {
			case "c":
				c.play();
				break;
			case "cSharp":
				cSharp.play();
				break;
			case "d":
				d.play();
				break;
			case "dSharp":
				dSharp.play();
				break;
			case "e":
				e.play();
				break;
			case "f":
				f.play();
				break;
			case "fSharp":
				fSharp.play();
				break;
			case "g":
				g.play();
				break;
			case "gSharp":
				gSharp.play();
				break;
			case "a":
				a.play();
				break;
			case "aSharp":
				aSharp.play();
				break;
			case "b":
				b.play();
				break;

			default:
				null;
		}
	});

	document.addEventListener("keydown", (event) => {
		const { key } = event;
		switch (key) {
			case "a":
				c.play();
				break;
			case "w":
				cSharp.play();
				break;
			case "s":
				d.play();
				break;
			case "e":
				dSharp.play();
				break;
			case "d":
				e.play();
				break;
			case "f":
				f.play();
				break;
			case "t":
				fSharp.play();
				break;
			case "g":
				g.play();
				break;
			case "y":
				gSharp.play();
				break;
			case "h":
				a.play();
				break;
			case "u":
				aSharp.play();
				break;
			case "j":
				b.play();
				break;

			default:
				null;
		}
	});
});
