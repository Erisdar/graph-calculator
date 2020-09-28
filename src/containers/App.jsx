import React, { memo, useState } from 'react';
import { useSelector } from "react-redux";
import { selectExpression } from "selectors/expression-selector";
import { selectRange } from "selectors/range-selector";
import { calculateExpression } from "utils/calc";

import './app.css';
import { Chart } from "./chart";
import { ExpressionCalculator } from "./expression-calculator";
import { Range } from "./range";

const App = () => {
	const range = useSelector(selectRange);
	const rangeStart = +range.rangeStart;
	const rangeEnd = +range.rangeEnd;

	const expression = useSelector(selectExpression);
	const [data, setData] = useState([]);


	const calculate = () => {
		const data = Array.from({length: rangeEnd - rangeStart + 1}, (_, i) => i + rangeStart)
			.map(x => {
				const y = calculateExpression(expression.replaceAll('x', x));
				return {label: x.toString(), x, y}
			});

		setData(data);
	}

	return (
		<div
			className="d-flex align-items-center justify-content-around flex-column flex-wrap flex-lg-row calculator-container">
			<ExpressionCalculator/>
			<div className="d-flex flex-column justify-content-around align-items-center m-3">
				<Range/>
				<button className="btn btn-lg mt-3 mt-lg-5 button-blue" onClick={() => calculate()}>Run Expression</button>
			</div>
			<Chart data={data}/>
		</div>
	);
};

export default memo(App);
