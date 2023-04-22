import { Quote } from '../../domain/entity/quote.entity';

export class QuoteDto {
  constructor(readonly _id: string, readonly dialog: string, readonly movie: string, readonly character: string) {}

  static toQuoteEntity(dto: QuoteDto): Quote {
    return {
      id: dto._id,
      dialog: dto.dialog,
      movieId: dto.movie,
      characterId: dto.character,
    };
  }
}
