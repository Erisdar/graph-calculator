import { setEndOfRange, setStartOfRange } from "actions/index";
import React, { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectRange } from "selectors/range-selector";

import './range.css';

export const Range = memo(() => {

	const dispatch = useDispatch();
	const {rangeStart, rangeEnd} = useSelector(selectRange);

	const validateEmptyRange = (value, setRange) => {
		if (value === "") {
			dispatch(setRange(0));
		}
	};

	return (
		<div className="range-container d-flex flex-column align-items-center">
			<h1>Range</h1>
			<div className="form-group d-flex flex-column align-items-center">
				<label htmlFor="start-range-input" className="col-form-label">From</label>
				<div className="col-8">
					<input className="form-control input-range" type="number" id="start-range-input" value={rangeStart}
						onChange={({target}) => dispatch(setStartOfRange(target.value))}
						onBlur={({target}) => validateEmptyRange(target.value, setStartOfRange)}/>
				</div>
			</div>
			<div className="form-group d-flex flex-column align-items-center">
				<label htmlFor="end-range-input" className="col-form-label">To</label>
				<div className="col-8">
					<input className="form-control input-range" type="number" id="end-range-input" value={rangeEnd}
						onChange={({target}) => dispatch(setEndOfRange(target.value))}
						onBlur={({target}) => validateEmptyRange(target.value, setEndOfRange)}/>
				</div>
			</div>
		</div>
	);
});
