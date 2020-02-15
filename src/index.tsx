import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

import "./style/global.scss";

import App from "./App";

render(<App />, document.getElementById("app"));
