import * as React from "react";
import { hot } from "react-hot-loader";
import { Dropdown } from "./components/dropdown";
import { Item } from "./components/item";

export class AppRootComponent extends React.Component {
  public render() {
    return (
      <div>
        <Item />
        <Dropdown />
      </div>
    );
  }
}

export default hot(module)(AppRootComponent);
