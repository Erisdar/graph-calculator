import { addExpressionToken, clearExpressionTokens, removeLastExpressionToken } from "actions/index";
import { calcButtons, operators, X_CHAR } from "constants/calculator.constants";
import _ from "lodash";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExpressionTokens } from "selectors/expression-tokens-selector";
import "./expression-calculator.css";

export const ExpressionCalculator = memo(() => {

	const dispatch = useDispatch();
	const expressionTokens = useSelector(selectExpressionTokens);

	const [expression, setExpression] = useState("");
	const [filteredComponents, setFilteredComponents] = useState([..._.flatten(calcButtons), X_CHAR]);

	useEffect(() => {
		setExpression(expressionTokens.reduce((string, token) => {
			const operator = operators.find(operator => operator.id === token);
			return string + (operator ? operator.symbol : token);
		}, ""));
	}, [expressionTokens]);

	//Filtering available buttons by last expression token
	useEffect(() => {
		const lastToken = expressionTokens[expressionTokens.length - 1];
		let filterFunc;

		if (!isNaN(lastToken) || lastToken === X_CHAR) {
			filterFunc = expressionTokens.find(token => token === "(")
				? (element) => !["(", "√", X_CHAR].includes(element)
				: (element) => !["(", "√", ")", X_CHAR].includes(element)
		} else {
			switch (lastToken) {
				case ")":
					filterFunc = (element) => isNaN(element) && ![".", "(", X_CHAR, "√"].includes(element);
					break;
				default:
					filterFunc = (element) => !isNaN(element) || ["√", "(", X_CHAR, ".", "(-)"].includes(element);
			}
		}

		setFilteredComponents(_.chain(calcButtons)
			.flatten()
			.push(X_CHAR)
			.filter(filterFunc)
			.value());
	}, [expressionTokens]);

	const addToken = (value) => {
		if (!filteredComponents.includes(value)) {
			return;
		}
		dispatch(addExpressionToken(value));
	}

	const clearTokens = () => {
		dispatch(clearExpressionTokens());
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
						calcButtons.map((row, index) => (
							<div key={index} className="d-flex calc-btn-row">
								{
									row.map((number, index) =>
										<button key={index}
											disabled={!filteredComponents.includes(number)}
											className={`calc-btn btn ${filteredComponents.includes(number) && "filtered-btn"}`}
											onClick={() => addToken(number)}>{number}</button>
									)
								}
							</div>
						))
					}
				</div>
				<div className="d-flex flex-column">
					<div>
						<button className={`btn calc-btn button-blue  ${filteredComponents.includes(X_CHAR) && "filtered-btn"}`}
							disabled={!filteredComponents.includes(X_CHAR)}
							onClick={() => addToken(X_CHAR)}>
							{`${X_CHAR} (var)`}
						</button>
					</div>
					<div>
						<button className="btn calc-btn button-orange" onClick={clearTokens}>
							AC
						</button>
					</div>
					<div>
						<button className="btn calc-btn button-orange" onClick={() => dispatch(removeLastExpressionToken())}>
							DEL
						</button>
					</div>
				</div>
			</div>
		</div>
	)
});
