import * as React from "react";
import { hot } from "react-hot-loader";
import { ISearchViewModel } from "./view-model";
import { MovieSearch } from "./component/search";
import { SearchResult } from "./component/search-result";

const headerProps: ISearchViewModel = {
  appName: "netflixroulette",
  filterText: "Search by",
  searchBtnText: "Search",
  title: "Find your movie"
};

export class AppRootComponent extends React.Component {
  public render() {
    return (
      <div>
        <MovieSearch {...headerProps} />
        <SearchResult />
      </div>
    );
  }
}

export default hot(module)(AppRootComponent);
