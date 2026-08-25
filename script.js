const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		const buttonText = button.textContent;

		if (buttonText >= "0" && buttonText <= "9") {
			if (display.value === "0") {
				display.value = buttonText;
			} else {
				display.value = display.value + buttonText;
			}
		}

		if (buttonText === ".") {
			if (!display.value.includes(".")) {
				display.value = display.value + ".";
			}
		}

		if (buttonText === "C") {
			display.value = "0";
		}

		if (buttonText === "Back") {
			if (display.value.length > 1) {
				display.value = display.value.slice(0, -1);
			} else {
				display.value = "0";
			}
		}
			
	});
});
