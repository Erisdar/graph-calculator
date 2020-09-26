import React from 'react';
import './app.css';

export default () => (
	<div id="container" className="container">
		<div>
			<h1>Calculator</h1>
		</div>
		<div id="expression">

		</div>
		<div id="standard-buttons" className="container-fluid">
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="num-7" className="btn num" title="7">7</button>
				</div>
				<div className="col-xs-1">
					<button id="num-8" className="btn num" title="8">8</button>
				</div>
				<div className="col-xs-1">
					<button id="num-9" className="btn num" title="9">9</button>
				</div>
				<div className="col-xs-1">
					<button id="op-divide" className="btn" title="Divide">÷</button>
				</div>
				<div className="col-xs-1">
					<button id="clear" className="btn button-orange" title="Clear all">AC</button>
				</div>
			</div>
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="num-4" className="btn num" title="4">4</button>
				</div>
				<div className="col-xs-1">
					<button id="num-5" className="btn num" title="5">5</button>
				</div>
				<div className="col-xs-1">
					<button id="num-6" className="btn num" title="6">6</button>
				</div>
				<div className="col-xs-1">
					<button id="op-multiply" className="btn" title="Multiply">x</button>
				</div>
				<div className="col-xs-1">
					<button id="delete" className="btn button-orange" title="Delete">DEL</button>
				</div>
			</div>
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="num-1" className="btn num" title="1">1</button>
				</div>
				<div className="col-xs-1">
					<button id="num-2" className="btn num" title="2">2</button>
				</div>
				<div className="col-xs-1">
					<button id="num-3" className="btn num" title="3">3</button>
				</div>
				<div className="col-xs-1">
					<button id="op-subtract" className="btn" title="Subtract">-</button>
				</div>
				<div className="col-xs-1">
					<button id="equals" className="btn button-blue" title="Equals">=</button>
				</div>
			</div>
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="period" className="btn" title="Decimal point">.</button>
				</div>
				<div className="col-xs-1">
					<button id="num-0" className="btn num" title="0">0</button>
				</div>
				<div className="col-xs-1">
					<button id="op-negate" className="btn" title="Negate">(-)</button>
				</div>
				<div className="col-xs-1">
					<button id="op-add" className="btn" title="Add">+</button>
				</div>
				<div className="col-xs-1">
					<button id="toggle-advanced" className="btn button-off" title="Toggle advanced panel"><span
						className="glyphicon glyphicon-triangle-bottom"></span></button>
				</div>
			</div>
		</div>
		<div id="advanced-buttons" className="container-fluid">
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="op-power" className="btn" title="Exponentiate">^</button>
				</div>
				<div className="col-xs-1">
					<button id="num-pi" className="btn num" title="Pi">π</button>
				</div>
				<div className="col-xs-1">
					<button id="op-inverse-sin" className="btn" title="Inverse sine">asin</button>
				</div>
				<div className="col-xs-1">
					<button id="op-inverse-cos" className="btn" title="Inverse cosine">acos</button>
				</div>
				<div className="col-xs-1">
					<button id="op-inverse-tan" className="btn" title="Inverse tangent">atan</button>
				</div>
			</div>
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="op-square-root" className="btn" title="Square root">√</button>
				</div>
				<div className="col-xs-1">
					<button id="op-nth-root" className="btn" title="nth root">x*√</button>
				</div>
				<div className="col-xs-1">
					<button id="op-sin" className="btn" title="Sine">sin</button>
				</div>
				<div className="col-xs-1">
					<button id="op-cos" className="btn" title="Cosine">cos</button>
				</div>
				<div className="col-xs-1">
					<button id="op-tan" className="btn" title="Tangent">tan</button>
				</div>
			</div>
			<div className="row button-row">
				<div className="col-xs-1">
					<button id="op-log" className="btn" title="Log base 10">log</button>
				</div>
				<div className="col-xs-1">
					<button id="op-natural-log" className="btn" title="Natural log (base e)">ln</button>
				</div>
				<div className="col-xs-1">
					<button id="op-e" className="btn" title="Exponential function">e^x</button>
				</div>
				<div className="col-xs-1">
					<button id="bracket-left" className="btn" title="Open bracket">(</button>
				</div>
				<div className="col-xs-1">
					<button id="bracket-right" className="btn" title="Closed bracket">)</button>
				</div>
			</div>
		</div>
	</div>
);
