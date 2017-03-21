import { Article } from '../landing/landing.state';

export const articleViewer: ArticleViewerState = {
    isFetchingArticle: false,
    article: {
        id: '',
        name: '',
        summary: '',
        content: '',
        parsedContent: '',
        imgUrl: ''
    }
};

export interface ArticleViewerState {
    isFetchingArticle: boolean;
    article: Article;
}
