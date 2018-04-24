import * as React from "react";
import { hot } from "react-hot-loader";
import { Dropdown } from "./components/dropdown";
import { Item } from "./components/item";
import {
  ClassComponent,
  FuncComponent,
  PureExampleComponent
} from "./components/hw1";

export class AppRootComponent extends React.Component {
  public render() {
    return (
      <div>
        <PureExampleComponent name={"Pure Component"} />
        <ClassComponent name={"Class Component"} />
        <FuncComponent name={"Functional Component"} />
        <Item />
        <Dropdown />
      </div>
    );
  }
}

export default hot(module)(AppRootComponent);
