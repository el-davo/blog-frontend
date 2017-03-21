import { toastr } from 'react-redux-toastr';
import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../../admin/admin.state';
import { ArticlesService } from '../../../articles/articles.service';
import { Article } from '../../../landing/landing.state';
import { EDIT_ARTICLE } from '../../article-editor.action-types';
import { addArticleFailed, editArticleSaved } from '../../article-editor.actions';

function* fetch({article}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        const articlesService = new ArticlesService();

        const savedArticle: Article = yield call(articlesService.editArticle.bind(articlesService), article, admin.auth.id);

        toastr.success('Alert', 'Article has been updated');

        yield put(editArticleSaved());
    } catch (err) {
        toastr.error('Error', 'An error occurred updating the article');

        yield put(addArticleFailed());
    }
}

export function* editArticleSaga() {
    yield* takeEvery(EDIT_ARTICLE, fetch);
}
