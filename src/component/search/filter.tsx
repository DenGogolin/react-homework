import * as React from "react";
import { ISearchViewModel } from "../../view-model/search";

export const SearchFilter = (props: ISearchViewModel) => (
  <div>
    <div>{props.filterText}</div>
    <input name="search-by" type="radio" />
    <input name="search-by" type="radio" />
  </div>
);
