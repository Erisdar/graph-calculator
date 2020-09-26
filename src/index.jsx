import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducer from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';

const store = createStore(reducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementsByClassName("app")[0]
)