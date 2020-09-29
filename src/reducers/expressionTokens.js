import { addExpressionToken, clearExpressionTokens, removeLastExpressionToken } from "actions/index";
import { handleActions } from "redux-actions";

export default handleActions(new Map([
	[addExpressionToken, (state, {payload}) => {
	const lastChar = state[state.length - 1];
		if (!isNaN(payload) && (!isNaN(lastChar) || lastChar === ".") || (payload === "." && !isNaN(lastChar))) {
			const lastElement = state.pop();
			return [...state, `${lastElement}${payload}`]
		}
		return [...state, payload];
	}],
	[removeLastExpressionToken, (state) => [...state.slice(0, -1)]],
	[clearExpressionTokens, () => []]
]), []);
