// Get Movies

export interface ResponseMovies {
  docs: Movies[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Movies {
  id: number;
  name: string;
  alternativeName?: string;
  enName: any;
  type: string;
  typeNumber: number;
  year: number;
  description?: string;
  shortDescription?: string;
  slogan: any;
  status?: string;
  rating: Rating;
  votes: Votes;
  movieLength?: number;
  totalSeriesLength?: number;
  seriesLength?: number;
  ratingMpaa: any;
  ageRating?: number;
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  premiere: Premiere;
  top10: any;
  top250: any;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: string[];
  createdAt: string;
  updatedAt: string;
  externalId?: ExternalId;
  poster?: Poster;
  backdrop?: Backdrop;
  releaseYears?: ReleaseYear[];
  watchability?: Watchability;
}

interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface Genre {
  name: string;
}

interface Country {
  name: string;
}

interface Person {
  id: number;
  photo: string;
  name?: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

interface Premiere {
  country: any;
  russia: any;
  digital: any;
  cinema: any;
  bluray: any;
  dvd: any;
  world: any;
}

interface ExternalId {
  kpHD: string;
}

interface Poster {
  url: string;
  previewUrl: string;
}

interface Backdrop {
  url: string;
  previewUrl: string;
}

interface ReleaseYear {
  start: number;
  end?: number;
}

interface Watchability {
  items: Item[];
}

interface Item {
  name: string;
  logo: Logo;
  url: string;
}

interface Logo {
  url: string;
}
