import { PageRequest } from '../domain/client/page.type.client';

export interface IHttpClient {
  get<T>(path: string, pageRequest?: PageRequest, urlParams?: Record<string, string>): Promise<T>;
}
