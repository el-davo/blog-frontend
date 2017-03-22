import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { ArticlesService } from '../../articles/articles.service';
import { FETCH_PENDING_ARTICLES } from '../pending-articles.action-types';
import { fetchPendingArticlesFailed, updatePendingArticles } from '../pending-articles.actions';

function* fetch() {
    try {
        const articlesService = new ArticlesService();

        const articles = yield apply(articlesService, articlesService.fetchPendingArticles);

        yield put(updatePendingArticles(articles));
    } catch (err) {
        yield put(fetchPendingArticlesFailed());
    }
}

export function* fetchPendingArticlesSaga() {
    yield* takeEvery(FETCH_PENDING_ARTICLES, fetch);
}
