import expression from "reducers/expression";
import { end, start } from "reducers/range";
import { combineReducers } from 'redux';

export default combineReducers({
	range: combineReducers({
		start,
		end,
	}),
	expression
})