import {Article} from '../landing/landing.state';

export const articleEditor = {
  isFetchingEditArticle: false,
  isCreatingNewArticle: false,
  isUpdatingAnArticle: false,
  isFetchingPreview: false,
  isFetchingEditingPreview: false,
  newArticle: {
    name: '',
    summary: '',
    content: ''
  },
  editingArticle: {},
  newArticlePreview: '',
  editingArticlePreview: ''
} as ArticleEditorState;

export interface ArticleEditorState {
  isFetchingEditArticle: boolean;
  isCreatingNewArticle: boolean;
  isUpdatingAnArticle: boolean;
  isFetchingPreview: boolean;
  isFetchingEditingPreview: boolean;
  newArticle: Article;
  editingArticle: Article;
  newArticlePreview: string;
  editingArticlePreview: string;
}
