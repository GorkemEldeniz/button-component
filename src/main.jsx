import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { globalStyle as GlobalStyle } from "./styled";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<React.StrictMode>
			<GlobalStyle />
			<App />
		</React.StrictMode>
	</Router>
);
