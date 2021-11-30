import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {IntlProvider} from 'react-intl';
import Wrapper from "./Wrapper";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Wrapper>
		<App />
	</Wrapper>,
	document.getElementById("root")
);
