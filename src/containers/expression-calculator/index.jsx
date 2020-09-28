import { changeExpression, clearExpression } from "actions/index";
import { calcButtons, operators } from "constants/calculator.constants";
import React, { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectExpression } from "selectors/expression-selector";

import './expression-calculator.css';

export const ExpressionCalculator = memo(() => {

	const dispatch = useDispatch();
	const expression = useSelector(selectExpression);

	const addToExpression = (value) => {
		const lastChar = expression.substr(expression.length - 1);
		if (lastChar === 'x' && !isNaN(value) || (value === 'x' && !["", " ", "("].includes(lastChar))) {
			return;
		}
		if ((isNaN(lastChar) && lastChar !== 'x') && (isNaN(value) && !['√', '('].includes(value))) {
			return;
		}
		const operator = operators.find(operator => operator.id === value);
		dispatch(changeExpression(`${expression}${operator ? operator.symbol : value}`));
	}

	return (
		<div className="calculator">
			<div>
				<h1>Expression</h1>
			</div>
			<div className="calculator-expression">
				{expression}
			</div>
			<div className="d-flex justify-content-between w-100">
				<div className="main-calc-buttons d-flex flex-column">
					{
						calcButtons.map(row => (
							<div className="d-flex calc-btn-row">
								{
									row.map(number => (
										<button className="calc-btn btn" onClick={() => addToExpression(number)}>{number}</button>
									))
								}
							</div>
						))
					}
				</div>
				<div className="d-flex flex-column">
					<div>
						<button className="btn calc-btn button-blue" onClick={() => addToExpression('x')}>x (var)</button>
					</div>
					<div>
						<button className="btn calc-btn button-orange">AC</button>
					</div>
					<div>
						<button className="btn calc-btn button-orange" onClick={() => dispatch(clearExpression())}>DEL</button>
					</div>
				</div>
			</div>
		</div>
	)
});
