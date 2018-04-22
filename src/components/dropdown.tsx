import * as React from "react";
import { dropdownInnerText, dropdownText } from "./dropdown.scss";

export class Dropdown extends React.Component {
  public state = {
    isOpened: false,
  };

  public openDropdown = () => {
    this.setState({ isOpened: !this.state.isOpened });
  }

  public render() {
    const a = new Date();
    const q = (
      <div className={dropdownText}>
        <div className={dropdownInnerText} onClick={this.openDropdown}>
          Switch
        </div>
        {this.state.isOpened && <div>now is {a.toDateString()}</div>}
      </div>
    );
    return q;
  }
}
