import { lazy } from "react"

export const SearchResult = lazy(() =>
  import(/*webpackChunkName: "[SearchResult]"*/ "./SearchResult").then((res) => ({
    default: res.SearchResult,
  })),
)
