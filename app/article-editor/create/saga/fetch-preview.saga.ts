import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../../admin/admin.state';
import { ArticlesService } from '../../../articles/articles.service';
import { Article } from '../../../landing/landing.state';
import { REQUEST_PREVIEW } from '../../article-editor.action-types';
import { requestPreviewFailed, updatePreview } from '../../article-editor.actions';

function* fetch({markdown}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        const articlesService = new ArticlesService();

        const {markdown: {markdownOutput}} = yield call(articlesService.fetchPreview.bind(articlesService), markdown, admin.auth.id);

        yield put(updatePreview(markdownOutput));
    } catch (err) {
        yield put(requestPreviewFailed());
    }
}

export function* requestPreviewSaga() {
    yield* takeEvery(REQUEST_PREVIEW, fetch);
}
