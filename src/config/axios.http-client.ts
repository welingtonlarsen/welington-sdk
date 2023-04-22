import axios from 'axios';
import { IHttpClient } from './http-client';
import { PageRequest } from '../domain/client/page.type.client';

export class AxiosHttpClient implements IHttpClient {
  constructor(private apiUrl: string, private apiKey: string) {}

  async get<T>(path: string, pageRequest?: PageRequest, urlParams?: Record<string, string>): Promise<T> {
    const { data } = await axios.get<T>(`${this.apiUrl}/${path}`, {
      params: {
        page: pageRequest?.page,
        limit: pageRequest?.pageSize,
      },
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    return data;
  }
}
