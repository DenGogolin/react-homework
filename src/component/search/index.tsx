import * as React from "react";
import { SearchButton } from "./button";
import { SearchFilter } from "./filter";
import { SearchBox } from "./search-box";
import { ISearchViewModel } from "../../view-model/search";

export const MovieSearch = (props: ISearchViewModel) => (
  <div>
    <div>{props.appName}</div>
    <div>{props.title}</div>
    <SearchBox {...props} />
    <SearchFilter {...props} />
    <SearchButton {...props} />
  </div>
);
