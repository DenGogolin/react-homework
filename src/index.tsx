import * as React from "react";
import { render } from "react-dom";
import AppRoot from "./app";
import ElemSample from "./components/hw1/elem";

const elem = document.createElement("div");
document.body.appendChild(elem);
const root = document.createElement("div");
document.body.appendChild(root);

render(<AppRoot />, root);
render(ElemSample, elem);
