import * as React from "react";
import { ISearchResultSortingViewModel } from "../../view-model";

export const Sorting = (props: ISearchResultSortingViewModel) => (
  <div>
    <span> {props.text} </span>
    {props.options.map(x => <span>{` ${x} `}</span>)}
  </div>
);