import {Article} from '../landing/landing.state';
export const articles = {
  isFetchingAllArticles: false,
  list: []
} as ArticlesState;

export interface ArticlesState {
  isFetchingAllArticles: boolean;
  list: Article[];
}
