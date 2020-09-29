import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import reducer from "reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./containers/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementsByClassName("app")[0]
)