import expressionTokens from "reducers/expressionTokens";
import { end, start } from "reducers/range";
import { combineReducers } from "redux";

export default combineReducers({
	range: combineReducers({
		start,
		end,
	}),
	expressionTokens,
})