import { HttpService } from './http.service';
import { mock, restore } from 'fetch-mock';

describe('HTTP Service', () => {

    const ARTICLES = [
        {
            id: '1',
            name: 'Test 1 name',
            content: 'Test 1 description'
        },
        {
            id: '2',
            name: 'Test 2 name',
            content: 'Test 2 description'
        }
    ];

    let httpService;

    beforeEach(() => {
        httpService = new HttpService();
    });

    afterEach(() => {
        restore();
    });

    describe('json()', () => {

        it('should make a get request', async () => {
            mock('/articles', ARTICLES);

            const response = await httpService.json('/articles');

            response.should.eql(ARTICLES);
        });

        it('should reject the promise if there was an error', (done) => {
            mock('/articles', { status: 404 });

            httpService.json('/articles').catch(() => done());
        });
    });

    describe('post', () => {

        it('should make a post request', async () => {
            mock('/articles', ARTICLES[0]);

            const response = await httpService.post('/articles', ARTICLES[0]);

            response.should.eql(ARTICLES[0]);
        });

        it('should reject the promise if there was an error', (done) => {
            mock('/articles', { status: 401 });

            httpService.post('/articles', ARTICLES[0]).catch(() => done());
        });
    });

    describe('put', () => {

        it('should make a put request', async () => {
            mock('/articles/1', ARTICLES[0]);

            const response = await httpService.put('/articles/1', ARTICLES[0]);

            response.should.eql(ARTICLES[0]);
        });

        it('should reject the promise if there was an error', (done) => {
            mock('/articles/1', { status: 401 });

            httpService.put('/articles/1', ARTICLES[0]).catch(() => done());
        });
    });

    describe('delete', () => {

        it('should make a delete request', async () => {
            mock('/articles/1', 201);

            const response = await httpService.delete('/articles/1');

            response.should.eql(201);
        });

        it('should reject the promise if there was an error', (done) => {
            mock('/articles/1', { status: 401 });

            httpService.delete('/articles/1').catch(() => done());
        });
    });
});
