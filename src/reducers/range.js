import { handleAction } from 'redux-actions';
import { setStartOfRange, setEndOfRange } from 'actions/index';

export const start = handleAction(setStartOfRange, (state, action) => action.payload, 0);
export const end = handleAction(setEndOfRange, (state, action) => action.payload, 10);