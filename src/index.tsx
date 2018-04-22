import * as React from "react";
import { render } from "react-dom";
import AppRoot from "./app";

const root = document.createElement("div");
document.body.appendChild(root);

render(<AppRoot />, root);
