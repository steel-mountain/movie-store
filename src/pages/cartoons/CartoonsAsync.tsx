import { lazy } from "react";

export const CartoonsAsync = lazy(() =>
  import(/*webpackChunkName:"[Cartoons]"*/ "./Cartoons").then((res) => ({
    default: res.Cartoons,
  }))
);
