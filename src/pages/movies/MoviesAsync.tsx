import { lazy } from "react";

export const Movies = lazy(() =>
  import(/*webpackChunkName:"[Movies]"*/ "./Movies").then((res) => ({
    default: res.Movies,
  }))
);
