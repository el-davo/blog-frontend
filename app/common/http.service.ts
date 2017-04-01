import 'whatwg-fetch';
import {baseUrl} from './base-url';

export class HttpService {

  json<T>(path: string): Promise<T> {
    return fetch(`${this.getBase()}${path}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }

  post<T>(path: string, body: any, headers: any = {}): Promise<T> {
    return fetch(`${this.getBase()}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }

  put<T>(path: string, body: any, headers: any = {}): Promise<T> {
    return fetch(`${this.getBase()}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
  }

  delete(path: string, headers: any = {}): Promise<Number> {
    return fetch(`${this.getBase()}${path}`, {
      method: 'DELETE',
      headers: {
        ...headers
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.status;
    });
  }

  private getBase(): string {
    return baseUrl[process.env.NODE_ENV];
  }
}
