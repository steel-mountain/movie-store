import { lazy } from "react";

export const RegisterAsync = lazy(() =>
  import(/*webpackChunkName:"[Register]"*/ "./Register").then((res) => ({
    default: res.Register,
  }))
);
