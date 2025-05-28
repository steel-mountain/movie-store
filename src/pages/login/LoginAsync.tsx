import { lazy } from "react";

export const LoginAsync = lazy(() =>
  import(/* webpackChunkName:"[Login]"*/ "./Login").then((res) => ({
    default: res.Login,
  }))
);
