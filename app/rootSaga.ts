import { fork } from 'redux-saga/effects';
import { adminLoginSaga } from './admin/saga/admin-login.saga';
import { adminLogoutSaga } from './admin/saga/admin-logout.saga';
import { deleteArticleSaga } from './admin/saga/delete-article.saga';
import { requestPreviewSaga } from './article-editor/create/saga/fetch-preview.saga';
import { saveAricleSaga } from './article-editor/create/saga/save-article.saga';
import { editArticleSaga } from './article-editor/edit/saga/edit-article.saga';
import { fetchEditArticleSaga } from './article-editor/edit/saga/fetch-edit-article.saga';
import { editingRequestPreviewSaga } from './article-editor/edit/saga/fetch-preview.saga';
import { fetchArticleSaga } from './article-viewer/saga/fetch-article.saga';
import { navigateToSaga } from './common/navbar/widgets/admin/saga/navigate-to.saga';
import { fetchNewestArticlesSaga } from './landing/saga/fetch-newest-articles.saga';
import { fetchPendingArticlesSaga } from './pending-articles/saga/fetch-pending-articles.saga';

export function* rootSaga() {
  yield [
    fork(fetchNewestArticlesSaga),
    fork(fetchArticleSaga),
    fork(saveAricleSaga),
    fork(fetchEditArticleSaga),
    fork(editArticleSaga),
    fork(adminLoginSaga),
    fork(adminLogoutSaga),
    fork(requestPreviewSaga),
    fork(editingRequestPreviewSaga),
    fork(deleteArticleSaga),
    fork(fetchPendingArticlesSaga),
    fork(navigateToSaga)
  ];
}
