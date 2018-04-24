import * as React from "react";
import { IHW1Sample } from ".";

export class ClassComponent extends React.Component<IHW1Sample, any> {
  public render() {
    return <div> Hello, {this.props.name}</div>;
  }
}
