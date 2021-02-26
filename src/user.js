class User {
	constructor(id, username, sound) {
		this.id = id;
		this.username = username;
		this.sound = sound;
	}

	setUserDashboard = () => {
		console.log(userContainer);
		userContainer.innerHTML = `<div><h1>Welcome ${this.username}</h1> <button class='delete-submit'> delete user </button> <button class='logout-submit'> logout </button> </div>`;
		userContainer.addEventListener("click", (e) => {
			if (e.target.className == "delete-submit") {
				this.deleteUser();
			}
			if (e.target.className == "logout-submit") {
				this.logout();
			}
		});
	};
	deleteUser = async () => {
		const res = await fetch(BASE_URL + "/users/" + this.id, {
			method: "DELETE",
		});
		const data = await res.json();
		if (data.error) {
			alert(data.error);
			return;
		}
		this.renderDefault();
	};

	logout = () => {
		this.renderDefault();
	};
	renderDefault = () => {
		userContainer.innerHTML = `<h1> Goodbye, reload the app if u want to login/create a new user</h1>`;
		keyboard.innerHTML = ``;
		selectorContainer.style = "display: none";
	};
}
