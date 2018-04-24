import * as React from "react";
import { hot } from "react-hot-loader";
import { ISearchViewModel } from "./view-model";
import { MovieSearch } from "./component/search";

const headerProps: ISearchViewModel = {
  appName: "netflixroulette",
  filterText: "SEARCH BY",
  searchBtnText: "Search",
  title: "FIND YOUR MOVIE"
};

export class AppRootComponent extends React.Component {
  public render() {
    return (
      <div>
        <MovieSearch {...headerProps} />
      </div>
    );
  }
}

export default hot(module)(AppRootComponent);
