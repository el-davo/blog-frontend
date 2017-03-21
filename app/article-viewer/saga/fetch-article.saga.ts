import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { ArticlesService } from '../../articles/articles.service';
import { FETCH_VIEW_ARTICLE } from '../article-viewer.action-types';
import { fetchViewArticleFailed, updateViewArticle } from '../article-viewer.actions';

function* fetch({articleId}) {
    try {
        const articlesService = new ArticlesService();

        const article = yield call(articlesService.fetchArticle.bind(articlesService), articleId);

        yield put(updateViewArticle(article));
    } catch (err) {
        yield put(fetchViewArticleFailed());
    }
}

export function* fetchArticleSaga() {
    yield* takeEvery(FETCH_VIEW_ARTICLE, fetch);
}
