import * as React from "react";
import { hot } from "react-hot-loader";

import { MovieSearch } from "./component/search";
import { SearchResult } from "./component/search-result";

import { movies } from "./mock/movies";
import { ISearchViewModel } from "./view-model/search";
import { ISearchResultViewModel } from "./view-model/search-result";
import { ISearchResultItemViewModel } from "./view-model/search-result-item";
const headerProps: ISearchViewModel = {
  appName: "netflixroulette",
  filterText: "Search by",
  searchBtnText: "Search",
  title: "Find your movie"
};

const resultMock: ISearchResultViewModel = {
  items: movies.data.map<ISearchResultItemViewModel>(x => ({
    title: x.title,
    genre: x.genres.join(", "),
    year: Number(x.release_date.split("-")[0]),
    poster: { src: x.poster_path, alt: "" }
  })),
  sorting: {
    text: `Sort by`,
    options: [`release date`, `rating`]
  }
};

export class AppRootComponent extends React.Component {
  public render() {
    return (
      <div>
        <MovieSearch {...headerProps} />
        <SearchResult {...resultMock} />
      </div>
    );
  }
}

export default hot(module)(AppRootComponent);
