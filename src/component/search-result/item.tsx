import * as React from "react";
import { ISearchResultItemViewModel } from "../../view-model/search-result-item";

export const Item = (props: ISearchResultItemViewModel) => (
  <div>
    <div>
      <img src={props.poster.src} alt={props.poster.alt} />
    </div>
    <div>
      <div>
        <span>{props.title}</span>
        <span>{props.year}</span>
      </div>
      <div>{props.genre}</div>
    </div>
  </div>
);
