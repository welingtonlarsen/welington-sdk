import { Movie } from '../../domain/entity/movie.entity';

export class MovieDto {
  constructor(
    readonly _id: string,
    readonly name: string,
    readonly runtimeInMinutes: number,
    readonly budgetInMillions: number,
    readonly boxOfficeRevenueInMillions: number,
    readonly academyAwardNominations: number,
    readonly academyAwardWins: number,
    readonly rottenTomatoesScore: number,
  ) {}

  static toMovieEntity(dto: MovieDto): Movie {
    return {
      id: dto._id,
      name: dto.name,
      runtimeInMinutes: dto.runtimeInMinutes,
      budgetInMillions: dto.budgetInMillions,
      boxOfficeRevenueInMillions: dto.boxOfficeRevenueInMillions,
      academyAwardNominations: dto.academyAwardNominations,
      academyAwardWins: dto.academyAwardWins,
      rottenTomatoesScore: dto.rottenTomatoesScore,
    };
  }
}
