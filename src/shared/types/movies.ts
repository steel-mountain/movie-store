// Get Movies

export interface IResponseMovies {
  docs: IMovies[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovies {
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

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  photo: string;
  name?: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Premiere {
  country: any;
  russia: any;
  digital: any;
  cinema: any;
  bluray: any;
  dvd: any;
  world: any;
}

export interface ExternalId {
  kpHD: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface ReleaseYear {
  start: number;
  end?: number;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo;
  url: string;
}

export interface Logo {
  url: string;
}
