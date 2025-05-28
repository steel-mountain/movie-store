import { lazy } from "react";

export const SearchResultAsync = lazy(() =>
  import(/*webpackChunkName: "[SearchResult]"*/ "./SearchResult").then(
    (res) => ({ default: res.SearchResult })
  )
);
