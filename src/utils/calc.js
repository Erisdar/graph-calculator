import { operators } from "constants/calculator.constants";

const getOperator = (opID) => {
	return operators.find(operator => operator.id === opID);
}

// Returns the result of applying the given unary or binary operator on the top values of the value stack
const applyOperator = (operator, [valA, valB]) => {
	return valB !== null ? operator.calc(parseFloat(valB), parseFloat(valA)) : operator.calc(parseFloat(valA));
}

// Get the precedence of an operator given its ID
const getOpPrecedence = (opID) => {
	const index = operators.findIndex(operator => operator.id === opID);
	// If the given ID does not return an operator, then return a large value that will always lose in precedence
	return index >= 0 ? index : 1000;
}

// Returns true if op1 ID has equal or higher precedence than op2 ID, false otherwise
const hasPrecedence = (op1, op2) => {
	return getOpPrecedence(op1) <= getOpPrecedence(op2);
}

export const calculateExpression = (tokenList) => {
	// Evaluate the expression using a modified version of the shunting yard algorithm
	const valStack = [];
	const opStack = [];

	for (let i = 0; i < tokenList.length; i++) {
		if (!isNaN(tokenList[i])) {
			valStack.push(tokenList[i]);
		} else if (tokenList[i] === "(") {
			opStack.push(tokenList[i]);
		} else if (tokenList[i] === ")") {
			while (opStack[opStack.length - 1] !== "(") {
				let operator = getOperator(opStack.pop());
				if (operator.numOperands === 1) {
					valStack.push(applyOperator(operator, [valStack.pop(), null]));
				} else {
					valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
				}
			}
			opStack.pop();
		} else {
			while (opStack.length > 0 && hasPrecedence(opStack[opStack.length - 1], tokenList[i])) {
				let operator = getOperator(opStack.pop());
				if (operator.numOperands === 1) {
					valStack.push(applyOperator(operator, [valStack.pop(), null]));
				} else {
					valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
				}
			}
			opStack.push(tokenList[i]);
		}
	}

	while (opStack.length > 0) {
		let operator = getOperator(opStack.pop());
		if (operator.numOperands === 1) {
			valStack.push(applyOperator(operator, [valStack.pop(), null]));
		} else {
			valStack.push(applyOperator(operator, [valStack.pop(), valStack.pop()]));
		}
	}
	return valStack[0];
}
