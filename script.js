const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		const buttonText = button.textContent;

		if (buttonText >= "0" && buttonText <= "9") {
			if (display.value === "0") {
				dislay.value = buttonText;
			} else {
				display.value = display.value + buttonText;
			}
		}
	});
});
