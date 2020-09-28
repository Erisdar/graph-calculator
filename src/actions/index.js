import { createAction } from 'redux-actions';

export const setStartOfRange = createAction('SET_START_OF_RANGE');
export const setEndOfRange = createAction('SET_END_OF_RANGE');
export const changeExpression = createAction('CHANGE_EXPRESSION');
export const clearExpression = createAction('CLEAR_EXPRESSION', () => '');

