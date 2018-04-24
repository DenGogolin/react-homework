import { IFooterViewModel } from "./footer";

export interface ISearchViewModel extends IFooterViewModel {
  title: string;
  filterText: string;
  searchBtnText: string;
}
