import * as React from "react";
import { IHW1Sample } from "./";

export class PureExampleComponent extends React.PureComponent<IHW1Sample, any> {
  public render() {
    return <div> Hello, {this.props.name}</div>;
  }
}
