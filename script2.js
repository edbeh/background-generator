var body = document.getElementById("gradient");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var cssCode = document.querySelector("h3");
var btnDirection = document.querySelector("#direction");
var dropdownMenu = document.getElementById("dropdownMenu");
var btnRandom = document.querySelector("#random");

//Set colors of linear-gradient
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssCode.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

btnDirection.addEventListener("click", function () {
	dropdownMenu.classList.toggle("show");
})

//Choose direction of linear-gradient
dropdownMenu.addEventListener("click", function (event) {
	body.style.background = "linear-gradient(" + event.target.textContent + ", " + color1.value + ", " + color2.value + ")";
	dropdownMenu.classList.toggle("show");
	cssCode.textContent = body.style.background;
})

//Generate random hex color
function randomColor() {
	return ("#" + Math.floor(Math.random() * 16777215).toString(16));
}

btnRandom.addEventListener("click", function () {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
})
