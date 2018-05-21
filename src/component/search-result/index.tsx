import * as React from "react";
import { Item } from "./item";
import { Sorting } from "./sorting";
import { ISearchResultViewModel } from "../../view-model/search-result";

export const SearchResult = (props: ISearchResultViewModel) => (
  <div>
    <div>
      <span>{props.items.length} movies found</span>
      <span>
        <Sorting {...props.sorting}/>
      </span>
    </div>
    {props.items.map(x => <Item {...x} />)}
  </div>
);
