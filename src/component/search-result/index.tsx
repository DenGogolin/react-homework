import * as React from "react";
import { ISearchResultViewModel } from "../../view-model";
import { Item } from "./item";
import { Sorting } from "./sorting";

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
