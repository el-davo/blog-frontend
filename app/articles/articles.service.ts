import 'whatwg-fetch';
import { Auth } from '../admin/admin.state';
import { HttpService } from '../common/http.service';
import { Article } from '../landing/landing.state';

export class ArticlesService {

    private httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    fetchArticles(): Promise<Article[]> {
        return this.httpService.json<Article[]>('/articles?filter={"where": {"public": true}}');
    }

    fetchArticle(articleId: string): Promise<Article> {
        return this.httpService.json<Article>(`/articles/${articleId}`);
    }

    saveArticle(article: Article, authorization: string): Promise<Article> {
        return this.httpService.post<Article>('/articles', article, { authorization });
    }

    editArticle(article: Article, authorization: string): Promise<Article> {
        return this.httpService.put<Article>(`/articles/${article.id}`, article, { authorization });
    }

    fetchPreview(markdown: string, authorization: string): Promise<string> {
        return this.httpService.post<string>('/articles/markdown', { markdown }, { authorization });
    }

    deleteArticle(article: Article, authorization: string): Promise<Number> {
        return this.httpService.delete(`/articles/${article.id}`, { authorization });
    }

    fetchPendingArticles(): Promise<Article[]> {
        return this.httpService.json<Article[]>('/articles?filter={"where": {"public": false}}');
    }
}
