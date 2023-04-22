import { MovieHttpClient } from '../movie-http.client';
import { AxiosHttpClient } from '../../../config/axios.http-client';

const API_URL = String(process.env.API_URL);
const API_KEY = String(process.env.API_KEY);

describe('Movie axios http client integration test', () => {
  let movieAxiosHttpClient: MovieHttpClient;

  beforeAll(() => {
    movieAxiosHttpClient = new MovieHttpClient(new AxiosHttpClient(API_URL, API_KEY));
  });

  describe('getAll', () => {
    it('should get all movies from api without pagination filter', async () => {
      const result = await movieAxiosHttpClient.getAll();

      expect(result).toMatchObject({
        items: expect.any(Array),
        total: expect.any(Number),
        pages: expect.any(Number),
        page: 1,
        offset: 0,
      });
      result.items.forEach((item) => {
        expect(item).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          runtimeInMinutes: expect.any(Number),
          budgetInMillions: expect.any(Number),
          boxOfficeRevenueInMillions: expect.any(Number),
          academyAwardNominations: expect.any(Number),
          academyAwardWins: expect.any(Number),
          rottenTomatoesScore: expect.any(Number),
        });
      });
    });

    it('should get all movies from api using pagination filter', async () => {
      const result = await movieAxiosHttpClient.getAll({ pageSize: 2, page: 1 });

      expect(result).toMatchObject({
        items: expect.any(Array),
        total: expect.any(Number),
        pages: expect.any(Number),
        page: 1,
        offset: undefined,
      });
      result.items.forEach((item) => {
        expect(item).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          runtimeInMinutes: expect.any(Number),
          budgetInMillions: expect.any(Number),
          boxOfficeRevenueInMillions: expect.any(Number),
          academyAwardNominations: expect.any(Number),
          academyAwardWins: expect.any(Number),
          rottenTomatoesScore: expect.any(Number),
        });
      });
    });
  });

  describe('getOne', () => {
    it('should get one movie by id', async () => {
      const result = await movieAxiosHttpClient.getOne('5cd95395de30eff6ebccde56');

      expect(result).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        runtimeInMinutes: expect.any(Number),
        budgetInMillions: expect.any(Number),
        boxOfficeRevenueInMillions: expect.any(Number),
        academyAwardNominations: expect.any(Number),
        academyAwardWins: expect.any(Number),
        rottenTomatoesScore: expect.any(Number),
      });
    });
  });

  describe('getQuote', () => {
    it('should get movie quotes from api without pagination filter', async () => {
      const result = await movieAxiosHttpClient.getQuote('5cd95395de30eff6ebccde5d');

      expect(result).toMatchObject({
        items: expect.any(Array),
        total: expect.any(Number),
        pages: expect.any(Number),
        page: 1,
        offset: 0,
      });
      result.items.forEach((item) => {
        expect(item).toMatchObject({
          id: expect.any(String),
          dialog: expect.any(String),
          movieId: expect.any(String),
          characterId: expect.any(String),
        });
      });
    });

    it('should get movie quotes from api using pagination filter', async () => {
      const result = await movieAxiosHttpClient.getQuote('5cd95395de30eff6ebccde5d', { pageSize: 2, page: 1 });

      expect(result).toMatchObject({
        items: expect.any(Array),
        total: expect.any(Number),
        pages: expect.any(Number),
        page: 1,
        offset: undefined,
      });
      result.items.forEach((item) => {
        expect(item).toMatchObject({
          id: expect.any(String),
          dialog: expect.any(String),
          movieId: expect.any(String),
          characterId: expect.any(String),
        });
      });
    });
  });
});
