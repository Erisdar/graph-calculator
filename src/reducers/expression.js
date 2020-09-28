import { changeExpression, clearExpression } from "actions/index";
import { handleAction, combineActions } from 'redux-actions';

export default handleAction(combineActions(changeExpression, clearExpression), {
	next: (state, {payload}) => payload,
}, '');