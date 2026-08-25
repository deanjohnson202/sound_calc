const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function calculate(firstValue, secondValue, chosenOperator) {
	if (chosenOperator === "+") {
		return firstValue + secondValue;
	}
	if (chosenOperator === "-") {
		return firstValue - secondValue;
	}
	if (chosenOperator === "*") {
		return firstValue * secondValue;
	}
	if (chosenOperator === "/") {
		if (secondValue === 0) {
			return "Error";
		}
		return firstValue / secondValue;
	}
}

const soundFiles = {
	"0": "Oh.mp3",
	"1": "1.mp3",
	"2": "2.mp3",
	"3": "3.mp3",
	"4": "4.mp3",
	"5": "5.mp3",
	"6": "6.mp3",
	"7": "7.mp3",
	"8": "8.mp3",
	"9": "9.mp3",
	".": "Oof.mp3",
	"+": "More.mp3",
	"-": "Less.mp3",
	"*": "hyuk.mp3",
	"/": "Hmm.mp3",
	"=": "AhhYeah.mp3",
	"C": "Ahhh.mp3",
	"Back": "UhOh.mp3"
};

function playButtonSound(buttonText) {
	const soundFile = soundFiles[buttonText];
	
	if (soundFile) {
		const sound = new Audio("sounds/" + soundFile);
		sound.play();
	}
}

buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		const buttonText = button.textContent;
		playButtonSound(buttonText);

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

		if (buttonText === "=") {
			if (
			firstNumber !== null &&
			operator !== null &&
			!waitingForSecondNumber
		) {
			const secondNumber = Number(display.value);
			const result = calculate(
				firstNumber,
				secondNumber,
				operator
				);

				display.value = result;
				firstNumber = null;
				operator = null;
				waitingForSecondNumber = true;
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
