import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { ArticlesService } from '../../articles/articles.service';
import { FETCH_NEWEST_ARTICLES } from '../landing.action-types';
import { fetchNewestArticles, fetchNewestArticlesFailed, updateNewestArticles } from '../landing.actions';

function* fetch() {
    try {
        const articlesService = new ArticlesService();

        const articles = yield apply(articlesService, articlesService.fetchArticles);

        yield put(updateNewestArticles(articles));
    } catch (err) {
        yield put(fetchNewestArticlesFailed());
    }
}

export function* fetchNewestArticlesSaga() {
    yield* takeEvery(FETCH_NEWEST_ARTICLES, fetch);
}
