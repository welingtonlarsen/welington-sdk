import { Movie } from '../entity/movie.entity';
import { Quote } from '../entity/quote.entity';
import { PageRequest, PageResult } from './page.type.client';

export interface MovieClient {
  getAll(pageRequest?: PageRequest): Promise<PageResult<Movie>>;
  getOne(id: string): Promise<Movie | null>;
  getQuote(id: string, pageRequest?: PageRequest): Promise<PageResult<Quote>>;
}
