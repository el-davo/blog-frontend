import { toastr } from 'react-redux-toastr';
import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../admin/admin.state';
import { ArticlesService } from '../../articles/articles.service';
import { REQUEST_DELETE_ARTICLE } from '../admin.action-types';
import { deleteArticleFailed, deleteArticleSucess, hideDeleteArticleModal } from '../admin.actions';
import { Auth } from '../admin.state';

function* deleteArticle({article}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        const articleService = new ArticlesService();

        const auth: Auth = yield call(articleService.deleteArticle.bind(articleService), article, admin.auth.id);

        toastr.success('Alert', 'Article deleted successfully');

        yield put(deleteArticleSucess());

        yield put(hideDeleteArticleModal());
    } catch (err) {
        toastr.error('Error', 'An error occurred deleting the article');

        yield put(deleteArticleFailed());
    }
}

export function* deleteArticleSaga() {
    yield* takeEvery(REQUEST_DELETE_ARTICLE, deleteArticle);
}
