import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../../admin/admin.state';
import { ArticlesService } from '../../../articles/articles.service';
import { Article } from '../../../landing/landing.state';
import { ADD_ARTICLE } from '../../article-editor.action-types';
import { addArticleFailed, addArticleSaved } from '../../article-editor.actions';

function* fetch({article}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        const articlesService = new ArticlesService();

        const savedArticle: Article = yield call(articlesService.saveArticle.bind(articlesService), article, admin.auth.id);

        toastr.success('Alert', 'New article has been created');

        yield put(push(`/articles/edit/${savedArticle.id}`));

        yield put(addArticleSaved());
    } catch (err) {
        toastr.error('Error', 'An error occured creating new article');

        yield put(addArticleFailed());
    }
}

export function* saveAricleSaga() {
    yield* takeEvery(ADD_ARTICLE, fetch);
}