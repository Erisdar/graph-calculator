import React from "react";

const style = {
	display: "inline-block",
	width: "100%",
	textAlign: "center",
	color: "#808080",
};

const rotateStyles = {
	transform: "rotate(-90deg)",
	width: 35,
	transformOrigin: "center",
	marginTop: 50,
	marginRight: 10
}

const AxisLabel = ({text, rotate}) => (
	<div>
		<span style={{...style, ...(rotate ? rotateStyles : {})}}>{text}</span>
	</div>
);

export default AxisLabel;