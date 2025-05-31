import { lazy } from "react"

export const Movie = lazy(() =>
  import(/*webpackChunkName:"[Movie]"*/ "./Movie").then((res) => ({
    default: res.Movie,
  })),
)
