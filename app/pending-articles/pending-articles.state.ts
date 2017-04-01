import {Article} from '../landing/landing.state';

export const pendingArticles = {
  isFetchingPendingArticles: false,
  pendingArticles: []
} as PendingArticlesState;

export interface PendingArticlesState {
  isFetchingPendingArticles: boolean;
  pendingArticles: Article[];
}
