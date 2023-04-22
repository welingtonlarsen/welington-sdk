import { MovieService } from './domain/service/movie.service';
import { MovieHttpClient } from './adapter/http-client/movie-http.client';
import { AxiosHttpClient } from './config/axios.http-client';
import { PageRequest } from './domain/client/page.type.client';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = String(process.env.API_URL);
const API_KEY = String(process.env.API_KEY);

const movieHttpClient = new AxiosHttpClient(API_URL, API_KEY);
const movieClient = new MovieHttpClient(movieHttpClient);
const movieService = new MovieService(movieClient);

const getAllMovies = (page?: PageRequest) => movieService.getAll(page);
const getMovie = (movieId: string) => movieService.getOne(movieId);
const getMovieQuote = (movieId: string, page?: PageRequest) => movieService.getQuote(movieId, page);

export { getAllMovies, getMovie, getMovieQuote };
