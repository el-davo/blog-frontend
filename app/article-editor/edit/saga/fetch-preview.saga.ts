import { takeEvery } from 'redux-saga';
import { apply, call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../../admin/admin.state';
import { ArticlesService } from '../../../articles/articles.service';
import { Article } from '../../../landing/landing.state';
import { EDITING_REQUEST_PREVIEW } from '../../article-editor.action-types';
import { editingRequestPreviewFailed, editingUpdatePreview } from '../../article-editor.actions';

function* fetch({markdown}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        const articlesService = new ArticlesService();

        const {markdownOutput} = yield call(articlesService.fetchPreview.bind(articlesService), markdown, admin.auth.id);

        yield put(editingUpdatePreview(markdownOutput));
    } catch (err) {
        yield put(editingRequestPreviewFailed());
    }
}

export function* editingRequestPreviewSaga() {
    yield* takeEvery(EDITING_REQUEST_PREVIEW, fetch);
}
