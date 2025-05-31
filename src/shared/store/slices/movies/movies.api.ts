import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_KEY } from "../../../constants"
import { getRandomNumber } from "../../../lib/getRandomNumber"
import { ResponseMovie, ResponseMovies } from "../../../types"

export const moviesApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.kinopoisk.dev/v1.4`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<ResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=movie`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getSeries: builder.query<ResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=8-10&type=tv-series`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getCartoons: builder.query<ResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=cartoon`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMovie: builder.query<ResponseMovie, string>({
      query: (id: string) => ({
        url: `movie/${id}`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMoviesBy: builder.query<ResponseMovies, { query: string; newPage: number }>({
      query: ({ query, newPage }) => ({
        url: `movie/search?page=${newPage}&limit=10&query=${query}`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMovieRandom: builder.query<ResponseMovie, void>({
      query: () => ({
        url: `movie/random?notNullFields=name&notNullFields=poster.url&notNullFields=description&notNullFields=rating.kp&notNullFields=alternativeName&notNullFields=watchability.items.url&rating.kp=8-10&rating.imdb=8-10`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
      keepUnusedDataFor: 0,
    }),
    getSimilarMovies: builder.query<ResponseMovies, void>({
      query: () => ({
        url: `movie?page=${getRandomNumber(
          1,
          265,
        )}&limit=6&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=movie`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
      keepUnusedDataFor: 0,
    }),
  }),
})

export const {
  useGetMoviesQuery,
  useGetSeriesQuery,
  useGetMovieQuery,
  useGetCartoonsQuery,
  useGetMoviesByQuery,
  useGetMovieRandomQuery,
  useGetSimilarMoviesQuery,
} = moviesApi
