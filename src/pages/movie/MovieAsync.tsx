import { lazy } from "react";

export const MovieAsync = lazy(() =>
  import(/*webpackChunkName:"[Movie]"*/ "./Movie").then((res) => ({
    default: res.Movie,
  }))
);
