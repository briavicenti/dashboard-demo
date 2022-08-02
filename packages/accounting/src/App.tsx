import { GlobalStyles, theme } from "@taxbit/cosmic";
import React from "react";
import ReactDOM from "react-dom";

import Accounting from "./Accounting";

const App = () => {
  return <Accounting />;
};

ReactDOM.render(<App />, document.getElementById("app"));
