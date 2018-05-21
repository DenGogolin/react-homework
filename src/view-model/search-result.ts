import { ISearchResultItemViewModel } from "./search-result-item";
import { ISearchResultSortingViewModel } from "./search-result-sorting";

export interface ISearchResultViewModel {
  items: ISearchResultItemViewModel[];
  sorting: ISearchResultSortingViewModel;
}
