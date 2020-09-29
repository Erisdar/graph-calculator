import { X_CHAR } from "constants/calculator.constants";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectExpressionTokens } from "selectors/expression-tokens-selector";
import { selectRange } from "selectors/range-selector";
import { calculateExpression } from "utils/calc";

import "./app.css";
import { Chart } from "./chart";
import { ExpressionCalculator } from "./expression-calculator";
import { Range } from "./range";

const App = () => {
	const range = useSelector(selectRange);
	const rangeStart = Math.min(range.rangeStart, range.rangeEnd);
	const rangeEnd = Math.max(range.rangeStart, range.rangeEnd);

	const expressionTokens = useSelector(selectExpressionTokens);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		if (!expressionTokens.length) {
			setData([]);
		}
	}, [expressionTokens])

	const calculate = () => {
		if (!expressionTokens.length) {
			return;
		}
		if (expressionTokens.filter(token => token === "(").length !== expressionTokens.filter(token => token === ")").length) {
			setError("Error: Unbalanced brackets");
			return;
		}
		const data = Array.from({length: rangeEnd - rangeStart + 1}, (_, i) => i + rangeStart)
			.map(x => {
				const y = calculateExpression(expressionTokens.map(token => token === X_CHAR ? x : token));
				return {label: x.toString(), x, y}
			});

		if (data.find(element => isNaN(element.y) || element.y === Infinity)) {
			setError("Error: Expression is not valid");
			return;
		}
		setData(data);
	}

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-around flex-column flex-wrap flex-lg-row calculator-container">
				<ExpressionCalculator/>
				<div className="d-flex flex-column justify-content-around align-items-center m-3">
					<Range/>
					<button className="btn btn-lg mt-3 mt-lg-5 button-blue" onClick={() => calculate()}>Run Expression</button>
				</div>
				<Chart data={data}/>
			</div>
			{
				error && <div className="alert alert-danger error fixed-bottom" role="alert">{error}</div>
			}
		</>
	);
};

export default memo(App);
