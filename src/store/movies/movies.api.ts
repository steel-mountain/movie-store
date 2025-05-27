import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponseMovie } from "../../models/models-Movie";
import { IResponseMovies } from "../../models/models-Movies";
import { getRandom } from "../../services/getRandom";

const API_KEY = "9KAR067-Q14MT1Q-K8BN9QR-B80H7FW";

export const moviesApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.kinopoisk.dev/v1.4`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=movie`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getSeries: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=8-10&type=tv-series`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getCartoons: builder.query<IResponseMovies, number>({
      query: (initialPage: number) => ({
        url: `movie?page=${initialPage}&limit=10&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=cartoon`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMovie: builder.query<IResponseMovie, string>({
      query: (id: string) => ({
        url: `movie/${id}`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMoviesBy: builder.query<
      IResponseMovies,
      { query: string; newPage: number }
    >({
      query: ({ query, newPage }) => ({
        url: `movie/search?page=${newPage}&limit=10&query=${query}`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
    }),
    getMovieRandom: builder.query<IResponseMovie, void>({
      query: () => ({
        url: `movie/random?notNullFields=name&notNullFields=poster.url&notNullFields=description&notNullFields=rating.kp&notNullFields=alternativeName&notNullFields=watchability.items.url&rating.kp=8-10&rating.imdb=8-10`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
      keepUnusedDataFor: 0,
    }),
    getSimilarMovies: builder.query<IResponseMovies, void>({
      query: () => ({
        url: `movie?page=${getRandom(
          1,
          265
        )}&limit=6&selectFields=&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url&year=2015-2024&rating.kp=7-10&type=movie`,
        method: "GET",
        headers: { accept: "application/json", "X-API-KEY": API_KEY },
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSeriesQuery,
  useGetMovieQuery,
  useGetCartoonsQuery,
  useGetMoviesByQuery,
  useGetMovieRandomQuery,
  useGetSimilarMoviesQuery,
} = moviesApi;
