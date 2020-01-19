export interface IAnime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  source: string;
  episodes: number;
  seasonYear: number;
  season: string;
  description: string;
  isAdult: boolean;
  genres: string[];
  coverImage: {
    large: string;
    medium: string;
    color: string;
  };
  bannerImage: string;
}
