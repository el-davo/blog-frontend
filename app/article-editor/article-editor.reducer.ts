import {Article} from '../landing/landing.state';
import {
  ADD_ARTICLE, ADD_ARTICLE_FAILED, ADD_ARTICLE_SAVED, EDIT_ARTICLE,
  EDIT_ARTICLE_FAILED, EDIT_ARTICLE_SAVED, EDIT_KEY_ARTICLE_CONTENT, EDIT_KEY_ARTICLE_IMG,
  EDIT_KEY_ARTICLE_NAME, EDIT_KEY_ARTICLE_SUMMARY, EDIT_TOGGLE_ARTICLE_PUBLIC, EDITING_REQUEST_PREVIEW,
  EDITING_REQUEST_PREVIEW_FAILED, EDITING_UPDATE_PREVIEW, FETCH_EDIT_ARTICLE, NEW_KEY_ARTICLE_CONTENT,
  NEW_KEY_ARTICLE_IMG, NEW_KEY_ARTICLE_NAME, NEW_KEY_ARTICLE_SUMMARY,
  NEW_TOGGLE_ARTICLE_PUBLIC, REQUEST_PREVIEW, REQUEST_PREVIEW_FAILED,
  UPDATE_EDIT_ARTICLE, UPDATE_PREVIEW
} from './article-editor.action-types';
import {articleEditor, ArticleEditorState} from './article-editor.state';

interface Action {
  type: string;
  articleId?: string;
  article?: Article;
  character?: string;
  markdownOutput?: string;
}

export function articleEditorReducer(state: ArticleEditorState = articleEditor, action: Action): ArticleEditorState {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, isCreatingNewArticle: true};
    case ADD_ARTICLE_SAVED:
      return {...state, isCreatingNewArticle: false};
    case ADD_ARTICLE_FAILED:
      return {...state, isCreatingNewArticle: false};
    case FETCH_EDIT_ARTICLE:
      return {...state, isFetchingEditArticle: true};
    case UPDATE_EDIT_ARTICLE:
      return {...state, isFetchingEditArticle: false, editingArticle: action.article};
    case EDIT_ARTICLE:
      return {...state, isUpdatingAnArticle: true};
    case EDIT_ARTICLE_SAVED:
      return {...state, isUpdatingAnArticle: false};
    case EDIT_ARTICLE_FAILED:
      return {...state, isUpdatingAnArticle: false};
    case NEW_KEY_ARTICLE_NAME:
      return {...state, newArticle: {...state.newArticle, name: action.character}};
    case NEW_KEY_ARTICLE_SUMMARY:
      return {...state, newArticle: {...state.newArticle, summary: action.character}};
    case NEW_KEY_ARTICLE_CONTENT:
      return {...state, newArticle: {...state.newArticle, content: action.character}};
    case NEW_KEY_ARTICLE_IMG:
      return {...state, newArticle: {...state.newArticle, imgUrl: action.character}};
    case EDIT_KEY_ARTICLE_NAME:
      return {...state, editingArticle: {...state.editingArticle, name: action.character}};
    case EDIT_KEY_ARTICLE_SUMMARY:
      return {...state, editingArticle: {...state.editingArticle, summary: action.character}};
    case EDIT_KEY_ARTICLE_CONTENT:
      return {...state, editingArticle: {...state.editingArticle, content: action.character}};
    case EDIT_KEY_ARTICLE_IMG:
      return {...state, editingArticle: {...state.editingArticle, imgUrl: action.character}};
    case REQUEST_PREVIEW:
      return {...state, isFetchingPreview: true};
    case UPDATE_PREVIEW:
      return {...state, isFetchingPreview: false, newArticlePreview: action.markdownOutput};
    case REQUEST_PREVIEW_FAILED:
      return {...state, isFetchingPreview: false};
    case EDITING_REQUEST_PREVIEW:
      return {...state, isFetchingEditingPreview: true};
    case EDITING_UPDATE_PREVIEW:
      return {...state, isFetchingEditingPreview: false, editingArticlePreview: action.markdownOutput};
    case EDITING_REQUEST_PREVIEW_FAILED:
      return {...state, isFetchingEditingPreview: false};
    case NEW_TOGGLE_ARTICLE_PUBLIC:
      return {...state, newArticle: {...state.newArticle, public: !state.newArticle.public}};
    case EDIT_TOGGLE_ARTICLE_PUBLIC:
      return {...state, editingArticle: {...state.editingArticle, public: !state.editingArticle.public}};
    default:
      return state;
  }
}
