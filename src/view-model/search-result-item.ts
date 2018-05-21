import { IPosterViewModel } from "./poster";

export interface ISearchResultItemViewModel {
  title: string;
  year: number;
  genre: string;
  poster: IPosterViewModel;
}
