// Get Movie

export interface ResponseMovie {
  id: number
  externalId: ExternalId
  name: string
  alternativeName: string
  enName: any
  names: Name[]
  type: string
  typeNumber: number
  year: number
  description: string
  shortDescription: string
  slogan: any
  status: any
  rating: Rating
  votes: Votes
  movieLength: number
  totalSeriesLength: any
  seriesLength: any
  ratingMpaa: any
  ageRating: number
  poster: Poster
  backdrop: Backdrop
  genres: Genre[]
  countries: Country[]
  persons: Person[]
  premiere: Premiere
  watchability: Watchability
  top10: any
  top250: any
  isSeries: boolean
  ticketsOnSale: boolean
  lists: string[]
  networks: any
  createdAt: string
  updatedAt: string
}

interface ExternalId {
  kpHD: string
}

interface Name {
  name: string
  language?: string
  type: string
}

interface Rating {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: any
}

interface Votes {
  kp: number
  imdb: number
  filmCritics: number
  russianFilmCritics: number
  await: number
}

interface Poster {
  url: string
  previewUrl: string
}

interface Backdrop {
  url: string
  previewUrl: string
}

interface Genre {
  name: string
}

interface Country {
  name: string
}

interface Person {
  id: number
  photo: string
  name?: string
  enName: string
  description: any
  profession: string
  enProfession: string
}

interface Premiere {
  country: any
  russia: any
  digital: any
  cinema: any
  bluray: any
  dvd: any
}

interface Watchability {
  items: Item[]
}

interface Item {
  name: string
  logo: Logo
  url: string
}

interface Logo {
  url: string
}
