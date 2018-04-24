import * as React from "react";
import { ISearchViewModel } from "../../view-model";
import { SearchButton } from "./button";
import { SearchFilter } from "./filter";
import { SearchBox } from "./search-box";

export const MovieSearch = (props: ISearchViewModel) => (
  <div>
    <div>{props.appName}</div>
    <div>{props.title}</div>
    <SearchBox {...props} />
    <SearchFilter {...props} />
    <SearchButton {...props} />
  </div>
);
