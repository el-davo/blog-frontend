import { spy } from 'sinon';
import { load } from 'proxyquire';

describe('Articles Service', () => {

  const ARTICLES = [
    {
      id: 'a1',
      name: 'Test 1 name',
      content: 'Test 1 content'
    },
    {
      id: 'a2',
      name: 'Test 2 name',
      content: 'Test 2 content'
    }
  ];

  let jsonSpy;
  let postSpy;
  let putSpy;
  let deleteSpy;
  let articlesService;

  describe('fetch articles', () => {

    beforeEach(() => {
      jsonSpy = spy();

      class HttpService {
        json(path: string) {
          jsonSpy(path);
          return Promise.resolve(ARTICLES);
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();

    });

    it('should fetch a list of articles from the server', async () => {
      const response = await articlesService.fetchArticles();

      const filter = {
        where: {
          public: true
        },
        fields: {
          content: false,
          parsedContent: false
        }
      };

      response.should.eql(ARTICLES);

      jsonSpy.calledOnce.should.be.true();

      jsonSpy.calledWith(`/articles?filter=${JSON.stringify(filter)}`).should.be.true();
    });
  });

  describe('fetch specific article', () => {

    beforeEach(() => {
      jsonSpy = spy();

      class HttpService {
        json(path: string) {
          jsonSpy(path);
          return Promise.resolve(ARTICLES[0]);
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();

    });

    it('should fetch a specific article', async () => {
      const response = await articlesService.fetchArticle('abc123');

      response.should.eql(ARTICLES[0]);

      jsonSpy.calledOnce.should.be.true();

      jsonSpy.calledWith('/articles/abc123').should.be.true();
    });
  });

  describe('save article', () => {

    beforeEach(() => {
      postSpy = spy();

      class HttpService {
        post(path: string, body: any, authorization: string) {
          postSpy(path, body, authorization);
          return 200;
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();

    });

    it('should save a new article', async () => {
      const response = await articlesService.saveArticle(ARTICLES[0]);

      postSpy.calledOnce.should.be.true();

      postSpy.calledWith('/articles', ARTICLES[0]).should.be.true();
    });

    it('should send authorization in header', async () => {
      const response = await articlesService.saveArticle(ARTICLES[0], 'abc123');

      postSpy.calledOnce.should.be.true();

      postSpy.calledWith('/articles', ARTICLES[0], { authorization: 'abc123' }).should.be.true();
    });
  });

  describe('edit article', () => {
    beforeEach(() => {
      putSpy = spy();

      class HttpService {
        put(path: string, body: any, authorization: any) {
          putSpy(path, body, authorization);
          return 200;
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();
    });

    it('should edit an article', async () => {
      const response = await articlesService.editArticle(ARTICLES[0]);

      putSpy.calledOnce.should.be.true();

      putSpy.calledWith(`/articles/${ARTICLES[0].id}`, ARTICLES[0]).should.be.true();
    });

    it('should send authorization in header', async () => {
      const response = await articlesService.editArticle(ARTICLES[0], 'abc123');

      putSpy.calledOnce.should.be.true();

      putSpy.calledWith(`/articles/${ARTICLES[0].id}`, ARTICLES[0], { authorization: 'abc123' }).should.be.true();
    });
  });

  describe('fetch preview', () => {
    beforeEach(() => {
      postSpy = spy();

      class HttpService {
        post(path: string, body: any, authorization: any) {
          postSpy(path, body, authorization);
          return 200;
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();
    });

    it('should get a preview of markdown', async () => {
      const response = await articlesService.fetchPreview('abc123', 'abc123');

      putSpy.calledOnce.should.be.true();

      postSpy.calledWith(`/articles/markdown`, { markdown: 'abc123' }, { authorization: 'abc123' }).should.be.true();
    });

  });

  describe('delete article', () => {

    beforeEach(() => {
      deleteSpy = spy();

      class HttpService {
        delete(path: string, authorization: any) {
          deleteSpy(path, authorization);
          return 200;
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();
    });

    it('should delete an article', async () => {
      await articlesService.deleteArticle(ARTICLES[0], 'abc123');

      deleteSpy.calledOnce.should.be.true();

      deleteSpy.calledWith(`/articles/${ARTICLES[0].id}`, { authorization: 'abc123' }).should.be.true();
    });

  });

  describe('fetch pending articles', () => {

    beforeEach(() => {
      jsonSpy = spy();

      class HttpService {
        json(path: string) {
          jsonSpy(path);
          return Promise.resolve(ARTICLES);
        }
      }

      const {ArticlesService} = load('./articles.service', {
        '../common/http.service': {
          HttpService
        }
      });

      articlesService = new ArticlesService();

    });

    it('should fetch a list of pending articles from the server', async () => {
      const response = await articlesService.fetchPendingArticles();

      const filter = {
        where: {
          public: false
        },
        fields: {
          content: false,
          parsedContent: false
        }
      };

      response.should.eql(ARTICLES);

      jsonSpy.calledOnce.should.be.true();

      jsonSpy.calledWith(`/articles?filter=${JSON.stringify(filter)}`).should.be.true();
    });
  });
});
