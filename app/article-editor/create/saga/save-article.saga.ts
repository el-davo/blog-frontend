import { toastr } from 'react-redux-toastr';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { AdminState } from '../../../admin/admin.state';
import { ArticlesService } from '../../../articles/articles.service';
import { navigateToRoute } from '../../../common/navbar/widgets/admin/admin-options.actions';
import { Article } from '../../../landing/landing.state';
import { ADD_ARTICLE } from '../../article-editor.action-types';
import { addArticleFailed, addArticleSaved } from '../../article-editor.actions';

function* fetch({article}) {
    try {
        const admin: AdminState = yield select((state: any) => state.admin);

        article.userId = admin.auth.userId;

        const articlesService = new ArticlesService();

        const savedArticle: Article = yield call(articlesService.saveArticle.bind(articlesService), article, admin.auth.id);

        toastr.success('Alert', 'New article has been created');

        yield put(navigateToRoute(`/articles/edit/${savedArticle.id}`));

        yield put(addArticleSaved());
    } catch (err) {
        toastr.error('Error', 'An error occurred creating new article');

        yield put(addArticleFailed());
    }
}

export function* saveAricleSaga() {
    yield* takeEvery(ADD_ARTICLE, fetch);
}
