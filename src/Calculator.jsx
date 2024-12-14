import { useState } from 'react';

const Calculator = () => {
	const [display, setDisplay] = useState('0');
	const [previousValue, setPreviousValue] = useState(null);
	const [operator, setOperator] = useState(null);
	const [waitingForOperand, setWaitingForOperand] = useState(false);

	const inputDigit = (digit) => {
		if (waitingForOperand) {
			setDisplay(String(digit));
			setWaitingForOperand(false);
		} else {
			setDisplay(display === '0' ? String(digit) : display + digit);
		}
	};

	const inputDecimal = () => {
		if (waitingForOperand) {
			setDisplay('0.');
			setWaitingForOperand(false);
		} else if (display.indexOf('.') === -1) {
			setDisplay(display + '.');
		}
	};

	const clearDisplay = () => {
		setDisplay('0');
		setPreviousValue(null);
		setOperator(null);
		setWaitingForOperand(false);
	};

	const performOperation = (nextOperator) => {
		const inputValue = parseFloat(display);

		if (previousValue == null) {
			setPreviousValue(inputValue);
		} else if (operator) {
			const currentValue = previousValue || 0;
			const newValue = calculate(currentValue, inputValue, operator);

			setDisplay(String(newValue));
			setPreviousValue(newValue);
		}

		setWaitingForOperand(true);
		setOperator(nextOperator);
	};

	const calculate = (firstOperand, secondOperand, operator) => {
		switch (operator) {
			case '+':
				return firstOperand + secondOperand;
			case '-':
				return firstOperand - secondOperand;
			case '*':
				return firstOperand * secondOperand;
			case '/':
				return firstOperand / secondOperand;
			default:
				return secondOperand;
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-4 w-64">
				<div className="bg-gray-200 text-right p-2 rounded mb-4 text-2xl font-bold">
					{display}
				</div>
				<div className="grid grid-cols-4 gap-2">
					{[
						{ label: 'AC', action: clearDisplay, className: 'bg-gray-300' },
						{ label: '+/-', action: () => setDisplay(String(-parseFloat(display))), className: 'bg-gray-300' },
						{ label: '%', action: () => setDisplay(String(parseFloat(display) / 100)), className: 'bg-gray-300' },
						{ label: '÷', action: () => performOperation('/'), className: 'bg-orange-500 text-white' },

						{ label: '7', action: () => inputDigit(7), className: 'bg-gray-200' },
						{ label: '8', action: () => inputDigit(8), className: 'bg-gray-200' },
						{ label: '9', action: () => inputDigit(9), className: 'bg-gray-200' },
						{ label: '×', action: () => performOperation('*'), className: 'bg-orange-500 text-white' },

						{ label: '4', action: () => inputDigit(4), className: 'bg-gray-200' },
						{ label: '5', action: () => inputDigit(5), className: 'bg-gray-200' },
						{ label: '6', action: () => inputDigit(6), className: 'bg-gray-200' },
						{ label: '-', action: () => performOperation('-'), className: 'bg-orange-500 text-white' },

						{ label: '1', action: () => inputDigit(1), className: 'bg-gray-200' },
						{ label: '2', action: () => inputDigit(2), className: 'bg-gray-200' },
						{ label: '3', action: () => inputDigit(3), className: 'bg-gray-200' },
						{ label: '+', action: () => performOperation('+'), className: 'bg-orange-500 text-white' },

						{ label: '0', action: () => inputDigit(0), className: 'col-span-2 bg-gray-200' },
						{ label: '.', action: inputDecimal, className: 'bg-gray-200' },
						{ label: '=', action: () => performOperation(null), className: 'bg-orange-500 text-white' }
					].map((button) => (
						<button
							key={button.label}
							onClick={button.action}
							className={`p-2 rounded text-center font-bold ${button.className}`}
						>
							{button.label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Calculator;
