import { lazy } from "react"

export const Favourites = lazy(() =>
  import(/*webpackChunkName:"[Favourites]"*/ "./Favourites").then((res) => ({
    default: res.Favourites,
  })),
)
