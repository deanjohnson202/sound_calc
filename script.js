const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		const buttonText = button.textContent;

		if (buttonText >= "0" && buttonText <= "9") {
			if (waitingForSecondNumber) {
				display.value = buttonText;
				waitingForSecondNumber = false;
			} else if (display.value === "0") {
				display.value = buttonText;	
			} else {
				display.value = display.value + buttonText;
			}
		}

		if (["/", "*", "-", "+"].includes(buttonText)) {
			firstNumber = Number(display.value);
			operator = buttonText;
			waitingForSecondNumber = true;
		}

		if (buttonText === ".") {
			if (waitingForSecondNumber) {
				display.value = "0.";
				waitingForSecondNumber = false;
			} else if (!display.value.includes(".")) {
				display.value = display.value + ".";
			}
		}
	

		if (buttonText === "C") {
			display.value = "0";
			firstNumber = null;
			operator = null;
			waitingForSecondNumber = false;
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
