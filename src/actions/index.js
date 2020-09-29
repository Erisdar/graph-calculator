import { createAction } from "redux-actions";

export const setStartOfRange = createAction("SET_START_OF_RANGE");
export const setEndOfRange = createAction("SET_END_OF_RANGE");

export const addExpressionToken = createAction("ADD_EXPRESSION_TOKEN");
export const removeLastExpressionToken = createAction("REMOVE_LAST_EXPRESSION_TOKEN");
export const clearExpressionTokens = createAction("CLEAR_EXPRESSION_TOKENS");