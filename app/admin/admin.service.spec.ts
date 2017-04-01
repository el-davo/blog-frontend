import {load} from 'proxyquire';
import {spy} from 'sinon';
import {Auth} from './admin.state';

describe('AdminService', () => {

  let adminService;
  let postSpy;

  beforeEach(() => {
    postSpy = spy();

    class HttpService {
      post(path: string, body: any) {
        postSpy(path, body);
        return Promise.resolve({id: 'abc123'} as Auth);
      }
    }

    const {AdminService} = load('./admin.service', {
      '../common/http.service': {
        HttpService
      }
    });

    adminService = new AdminService();
  });

  describe('login()', () => {

    it('should login to the blog', async() => {
      const response: Auth = await adminService.login('username', 'password');

      response.id.should.eql('abc123');

      postSpy.calledOnce.should.be.true();
      postSpy.calledWith('/users/login', {username: 'username', password: 'password'}).should.be.true();
    });
  });
});
