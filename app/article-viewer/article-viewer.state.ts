import { Article } from '../landing/landing.state';

export const articleViewer: ArticleViewerState = {
    isFetchingArticle: false,
    article: {
        id: '',
        userId: '',
        name: '',
        summary: '',
        content: '',
        parsedContent: '',
        imgUrl: '',
        modified: '',
        public: false
    }
};

export interface ArticleViewerState {
    isFetchingArticle: boolean;
    article: Article;
}
