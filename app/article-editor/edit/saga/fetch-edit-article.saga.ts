import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { ArticlesService } from '../../../articles/articles.service';
import { Article } from '../../../landing/landing.state';
import { FETCH_EDIT_ARTICLE } from '../../article-editor.action-types';
import { addArticleFailed, updateEditArticle } from '../../article-editor.actions';

function* fetch({articleId}) {
    try {
        const articlesService = new ArticlesService();

        const article: Article = yield call(articlesService.fetchArticle.bind(articlesService), articleId);

        yield put(updateEditArticle(article));
    } catch (err) {
        yield put(addArticleFailed());
    }
}

export function* fetchEditArticleSaga() {
    yield* takeEvery(FETCH_EDIT_ARTICLE, fetch);
}
