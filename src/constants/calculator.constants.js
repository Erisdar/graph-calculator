export const operators = [
	{
		id: "^",
		numOperands: 2,
		symbol: " ^ ",
		calc: function (a, b) {
			return Math.pow(a, b);
		}
	},
	{
		id: "(-)",
		numOperands: 1,
		symbol: " -",
		calc: function (a) {
			return -a;
		}
	},
	{
		id: "√",
		numOperands: 1,
		symbol: " √",
		calc: function (a) {
			return Math.sqrt(a);
		}
	},
	{
		id: "*",
		numOperands: 2,
		symbol: " * ",
		calc: function (a, b) {
			return a * b;
		}
	},
	{
		id: "÷",
		numOperands: 2,
		symbol: " / ",
		calc: function (a, b) {
			return a / b;
		}
	},
	{
		id: "+",
		numOperands: 2,
		symbol: " + ",
		calc: function (a, b) {
			return a + b;
		}
	},
	{
		id: "-",
		numOperands: 2,
		symbol: " - ",
		calc: function (a, b) {
			return a - b;
		}
	}
];

export const calcButtons = [
	[7, 8, 9, '÷', '*'],
	[4, 5, 6, '+', '-'],
	[1, 2, 3, '(', ')'],
	['.', 0, '(-)', '^', '√'],
];