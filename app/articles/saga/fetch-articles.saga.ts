import {takeEvery} from 'redux-saga';
import {apply, put} from 'redux-saga/effects';
import {ArticlesService} from '..//articles.service';
import {FETCH_ALL_ARTICLES} from '../articles.action-types';
import {updateAllArticles, fetchAllArticlesFailed} from '../articles.actions';

function* fetch() {
  try {
    const articlesService = new ArticlesService();

    const articles = yield apply(articlesService, articlesService.fetchArticles);

    yield put(updateAllArticles(articles));
  } catch (err) {
    yield put(fetchAllArticlesFailed());
  }
}

export function* fetchAllArticlesSaga() {
  yield* takeEvery(FETCH_ALL_ARTICLES, fetch);
}
