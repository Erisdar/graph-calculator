import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

const STROKE = 1;
const DEFAULT_MAX_VALUE = 10;
const DEFAULT_MIN_VALUE = 0;

const LineChart = ({
	data,
	height,
	width,
	horizontalGuides: numberOfHorizontalGuides,
	verticalGuides: numberOfVerticalGuides,
	precision
}) => {
	const getAxisFromData = (axis) => {
		let minValue = data.length ? Math.min(...data.map(e => e[axis])) : DEFAULT_MIN_VALUE;
		let maxValue = data.length ? Math.max(...data.map(e => e[axis])) : DEFAULT_MAX_VALUE;
		if (maxValue === minValue) {
			maxValue += 10;
			minValue -= 10;
		}
		return [minValue, maxValue];
	};

	const [minimumXFromData, maximumXFromData] = getAxisFromData("x");
	const [minimumYFromData, maximumYFromData] = getAxisFromData("y");

	const digits = parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;
	const FONT_SIZE = width / 50;
	const padding = (FONT_SIZE + digits) * 3;
	const chartWidth = width - padding * 2;
	const chartHeight = height - padding * 2;

	const points = data
		.map(element => {
			const x = ((element.x - minimumXFromData) / (maximumXFromData - minimumXFromData)) * chartWidth + padding;
			const y = chartHeight - ((element.y - minimumYFromData) / (maximumYFromData - minimumYFromData)) * chartHeight + padding;
			return `${x},${y}`;
		})
		.join(" ");

	const Axis = ({points}) => <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points}/>;
	const XAxis = () => <Axis points={`${padding},${height - padding} ${width - padding},${height - padding}`}/>;
	const YAxis = () => <Axis points={`${padding},${padding} ${padding},${height - padding}`}/>;

	const VerticalGuides = () => {
		const guideCount = numberOfVerticalGuides || data.length - 1;
		const startY = padding;
		const endY = height - padding;

		return new Array(guideCount).fill(0).map((_, index) => {
			const ratio = (index + 1) / guideCount;

			const xCoordinate = padding + ratio * (width - padding * 2);

			return (
				<React.Fragment key={index}>
					<polyline
						fill="none"
						stroke="#ccc"
						strokeWidth=".5"
						points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
					/>
				</React.Fragment>
			);
		});
	};

	const HorizontalGuides = () => {
		const startX = padding;
		const endX = width - padding;

		return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
			const ratio = (index + 1) / numberOfHorizontalGuides;

			const yCoordinate = chartHeight - chartHeight * ratio + padding;

			return (
				<React.Fragment key={index}>
					<polyline
						fill="none"
						stroke={"#ccc"}
						strokeWidth=".5"
						points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
					/>
				</React.Fragment>
			);
		});
	};

	const LabelsXAxis = () => {
		const maxXLabelLength = Math.max(minimumXFromData.toString().length, maximumXFromData.toString().length)
		const PARTS = 20 - maxXLabelLength * 2;
		const y = height - padding + FONT_SIZE * 2;
		const xValues = data.length ? data : [...Array(11).keys()].map(value => ({x: value, label: value.toString()}));

		return _.chain(xValues)
			.chunk(Math.ceil((xValues.length / PARTS)))
			.map(_.head)
			.map((element, index) => {
				const x = ((element.x - minimumXFromData) / (maximumXFromData - minimumXFromData)) * chartWidth + padding - FONT_SIZE / 2

				return (
					<text
						key={index}
						x={x}
						y={y}
						style={{
							fill: "#808080",
							fontSize: FONT_SIZE,
							fontFamily: "Helvetica"
						}}
					>
						{element.label}
					</text>
				);
			})
			.value();
	};

	const LabelsYAxis = () => {
		const PARTS = numberOfHorizontalGuides;

		return new Array(PARTS + 1).fill(0).map((_, index) => {
			const x = FONT_SIZE;
			const ratio = index / numberOfHorizontalGuides;

			const yCoordinate = chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
			const value = parseFloat((minimumYFromData + ((maximumYFromData - minimumYFromData) / PARTS) * index).toString()).toFixed(precision);
			return (
				<text
					key={index}
					x={x}
					y={yCoordinate}
					style={{
						fill: "#808080",
						fontSize: FONT_SIZE,
						fontFamily: "Helvetica",
					}}
				>
					{value.length > 5 ? Number(value).toExponential() : value}
				</text>
			);
		});
	};

	return (
		<svg viewBox={`0 0 ${width} ${height}`}>
			<XAxis/>
			<LabelsXAxis/>
			<YAxis/>
			<LabelsYAxis/>
			{numberOfVerticalGuides && <VerticalGuides/>}
			<HorizontalGuides/>

			<polyline
				fill="none"
				stroke="#0074d9"
				strokeWidth={STROKE}
				points={points}
			/>
		</svg>
	);
};

LineChart.defaultProps = {
	height: 200,
	width: 500,
	horizontalGuides: 4,
	verticalGuides: null,
	precision: 2
};

LineChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number,
			label: PropTypes.string
		})
	).isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
	horizontalGuides: PropTypes.number,
	verticalGuides: PropTypes.number,
	precision: PropTypes.number
};

export default LineChart;