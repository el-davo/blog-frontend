import { HttpService } from '../common/http.service';
import { Auth } from './admin.state';

export class AdminService {

    httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    login(username: string, password: string): Promise<Auth> {
        return this.httpService.post<Auth>('/users/login', { username, password });
    }
}
