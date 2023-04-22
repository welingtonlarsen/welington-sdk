import { Movie } from '../../entity/movie.entity';
import { Quote } from '../../entity/quote.entity';
import { MovieClient } from '../../client/movie.client';
import { MovieService } from '../movie.service';

const movies: Movie[] = [
  {
    id: 'movie-id-1',
    name: 'The Lord of the Rings Series',
    runtimeInMinutes: 558,
    budgetInMillions: 281,
    boxOfficeRevenueInMillions: 2917,
    academyAwardNominations: 30,
    academyAwardWins: 17,
    rottenTomatoesScore: 94,
  },
  {
    id: 'movie-id-2',
    name: 'The Hobbit Series',
    runtimeInMinutes: 462,
    budgetInMillions: 675,
    boxOfficeRevenueInMillions: 2932,
    academyAwardNominations: 7,
    academyAwardWins: 1,
    rottenTomatoesScore: 66.33333333,
  },
];

const quotes: Quote[] = [
  {
    id: 'quote-id-1',
    dialog: "He's always followed me everywhere I went since before we were tweens.",
    movieId: '5cd95395de30eff6ebccde5d',
    characterId: '5cd99d4bde30eff6ebccfc7c',
  },
  {
    id: 'quote-id-2',
    dialog: "One thing I've learnt about Hobbits: They are a most hardy folk.",
    movieId: '5cd95395de30eff6ebccde5d',
    characterId: '5cd99d4bde30eff6ebccfbe6',
  },
];

describe('Movie service unit test', () => {
  const movieClient: jest.Mocked<MovieClient> = {
    getAll: jest.fn(),
    getOne: jest.fn(),
    getQuote: jest.fn(),
  };

  const movieService = new MovieService(movieClient);

  describe('getAll', () => {
    movieClient.getAll.mockResolvedValue({
      items: movies,
      total: movies.length,
      offset: 0,
      page: 1,
      pages: 1,
    });

    it('should get all movies with default page parameter', async () => {
      const result = await movieService.getAll();

      expect(movieClient.getAll).toHaveBeenCalledWith({ page: 1, pageSize: 10 });
      expect(result).toStrictEqual({
        items: movies,
        total: movies.length,
        offset: 0,
        page: 1,
        pages: 1,
      });
    });

    it('should get all movies using defined page parameter', async () => {
      const page = { pageSize: 2, page: 1 };

      const result = await movieService.getAll(page);

      expect(movieClient.getAll).toHaveBeenCalledWith(page);
      expect(result).toStrictEqual({
        items: movies,
        total: movies.length,
        offset: 0,
        page: 1,
        pages: 1,
      });
    });
  });

  describe('getOne', () => {
    movieClient.getOne.mockResolvedValue(movies[0]);

    it('should get one movie by id', async () => {
      const result = await movieService.getOne('movie-id-1');
      expect(result).toStrictEqual(movies[0]);
    });
  });

  describe('getQuote', () => {
    movieClient.getQuote.mockResolvedValue({
      items: quotes,
      total: quotes.length,
      offset: 0,
      page: 1,
      pages: 1,
    });

    it('should get movie quote with default page parameter', async () => {
      const result = await movieService.getQuote('movie-id-1');

      expect(movieClient.getQuote).toHaveBeenCalledWith('movie-id-1', { page: 1, pageSize: 10 });
      expect(result).toStrictEqual({
        items: quotes,
        total: quotes.length,
        offset: 0,
        page: 1,
        pages: 1,
      });
    });

    it('should get movie quote using defined page parameter', async () => {
      const page = { pageSize: 2, page: 1 };

      const result = await movieService.getQuote('movie-id-1', page);

      expect(movieClient.getQuote).toHaveBeenCalledWith('movie-id-1', page);
      expect(result).toStrictEqual({
        items: quotes,
        total: quotes.length,
        offset: 0,
        page: 1,
        pages: 1,
      });
    });
  });
});
