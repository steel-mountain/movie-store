// GetMovie

export interface IResponseMovie {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  enName: any;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: any;
  status: any;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  totalSeriesLength: any;
  seriesLength: any;
  ratingMpaa: any;
  ageRating: number;
  poster: Poster;
  backdrop: Backdrop;
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  premiere: Premiere;
  watchability: Watchability;
  top10: any;
  top250: any;
  isSeries: boolean;
  ticketsOnSale: boolean;
  lists: string[];
  networks: any;
  createdAt: string;
  updatedAt: string;
}

export interface ExternalId {
  kpHD: string;
}

export interface Name {
  name: string;
  language?: string;
  type: string;
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

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
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
  enName: string;
  description: any;
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
