import "styled-components/macro";
import React, { useMemo, useRef } from "react";
import { hot } from "react-hot-loader";

import "./App.scss";

function App() {
  return (
    <div className="App" css="font-weight: bold;">
      Hello
    </div>
  );
}

const wrap =
  process.env.NODE_ENV === "development" ? hot(module) : (x: any) => x;

export default wrap(App);
