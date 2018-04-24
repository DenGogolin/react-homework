import * as React from "react";
import { ISearchViewModel } from "../../view-model";

export const SearchButton = (props: ISearchViewModel) => (
  <button>{props.searchBtnText}</button>
);
