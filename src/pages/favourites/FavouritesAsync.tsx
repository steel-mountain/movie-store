import { lazy } from "react";

export const FavouritesAsync = lazy(() =>
  import(/*webpackChunkName:"[Favourites]"*/ "./Favourites").then((res) => ({
    default: res.Favourites,
  }))
);
