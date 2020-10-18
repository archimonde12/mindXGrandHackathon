const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
if (data.getWannaSignup() === 1) {
  container.classList.add("right-panel-active");
  data.setWannaSignup(0);
}

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let register_button = document.getElementById("register_button");
let login_button = document.getElementById("login_button");
console.log("No one is online");
let signInForm = document.getElementById("sign-in-form");

signInForm.onsubmit = async function (e) {
  e.preventDefault();
  console.log(this);
  let email = this.email.value;
  let password = this.password.value;
  try {
    await controller.logIn(email, password, "sign-in-err");
  } catch (error) {
    console.log(error);
  }
};
let signUpForm = document.getElementById("sign-up-form");
signUpForm.onsubmit = async function (e) {
	e.preventDefault();
	let displayName=this.displayName.value
	let email = this.email.value;
	let password = this.password.value;
	console.log(displayName,email,password)
	try {
	  await controller.register(email, password,displayName, "sign-up-err");
	} catch (error) {
	  console.log(error);
	}
  };
console.log("index");

