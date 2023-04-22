import { Movie } from '../../domain/entity/movie.entity';
import { Quote } from '../../domain/entity/quote.entity';
import { PageRequest, PageResult } from '../../domain/client/page.type.client';
import { MovieDto } from '../dto/movie.dto';
import { MovieClient } from '../../domain/client/movie.client';
import { IHttpClient } from '../../config/http-client';
import { Page } from '../dto/page.dto';
import { QuoteDto } from '../dto/quote.dto';
import {SdkError} from "../../domain/error/sdk.error";

export class MovieHttpClient implements MovieClient {
  constructor(private httpClient: IHttpClient) {}

  async getAll(pageRequest?: PageRequest): Promise<PageResult<Movie>> {
    try {
      const { docs, total, page, pages, offset } = await this.httpClient.get<Page<MovieDto>>(`movie`, pageRequest);

      const items: Movie[] = docs.map((movie) => MovieDto.toMovieEntity(movie));

      return {
        items,
        total,
        page,
        pages,
        offset,
      };
    } catch (error) {
      throw new SdkError(`Error on get all movies: ${error}`);
    }
  }

  async getOne(id: string): Promise<Movie | null> {
    try {
      const { docs } = await this.httpClient.get<Page<MovieDto>>(`movie/${id}`);
      return docs.length ? MovieDto.toMovieEntity(docs[0]) : null;
    } catch (error) {
      throw new SdkError(`Error on get one movie: ${error}`);
    }
  }

  async getQuote(id: string, pageRequest?: PageRequest | undefined): Promise<PageResult<Quote>> {
    try {
      const { docs, total, page, pages, offset } = await this.httpClient.get<Page<QuoteDto>>(
        `movie/${id}/quote`,
        pageRequest,
      );

      const items: Quote[] = docs.map((quote) => QuoteDto.toQuoteEntity(quote));

      return {
        items,
        total,
        page,
        pages,
        offset,
      };
    } catch (error) {
      throw new SdkError(`Error on get movie quotes: ${error}`);
    }
  }
}
