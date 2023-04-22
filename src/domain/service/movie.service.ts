import { Movie } from '../entity/movie.entity';
import { Quote } from '../entity/quote.entity';
import { MovieClient } from '../client/movie.client';
import { PageRequest, PageResult } from '../client/page.type.client';

const defaultPageRequest: PageRequest = {
  page: 1,
  pageSize: 10,
};

export class MovieService {
  constructor(private movieClient: MovieClient) {}

  async getAll(page?: PageRequest): Promise<PageResult<Movie>> {
    return this.movieClient.getAll(page ?? defaultPageRequest);
  }

  async getOne(movieId: string): Promise<Movie | null> {
    return this.movieClient.getOne(movieId);
  }

  async getQuote(movieId: string, page?: PageRequest): Promise<PageResult<Quote>> {
    return this.movieClient.getQuote(movieId, page ?? defaultPageRequest);
  }
}
