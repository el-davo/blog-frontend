import 'whatwg-fetch';
import {HttpService} from '../common/http.service';
import {Article} from '../landing/landing.state';

export class ArticlesService {

  private httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  fetchArticles(): Promise<Article[]> {
    const filter = {
      where: {
        public: true
      },
      fields: {
        content: false,
        parsedContent: false
      }
    };
    return this.httpService.json<Article[]>(`/articles?filter=${JSON.stringify(filter)}`);
  }

  fetchArticle(articleId: string): Promise<Article> {
    return this.httpService.json<Article>(`/articles/${articleId}`);
  }

  saveArticle(article: Article, authorization: string): Promise<Article> {
    return this.httpService.post<Article>('/articles', article, {authorization});
  }

  editArticle(article: Article, authorization: string): Promise<Article> {
    return this.httpService.put<Article>(`/articles/${article.id}`, article, {authorization});
  }

  fetchPreview(markdown: string, authorization: string): Promise<string> {
    return this.httpService.post<string>('/articles/markdown', {markdown}, {authorization});
  }

  deleteArticle(article: Article, authorization: string): Promise<number> {
    return this.httpService.delete(`/articles/${article.id}`, {authorization});
  }

  fetchPendingArticles(): Promise<Article[]> {
    const filter = {
      where: {
        public: false
      },
      fields: {
        content: false,
        parsedContent: false
      }
    };
    return this.httpService.json<Article[]>(`/articles?filter=${JSON.stringify(filter)}`);
  }
}
