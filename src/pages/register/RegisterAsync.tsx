import { lazy } from "react";

export const Register = lazy(() =>
  import(/*webpackChunkName:"[Register]"*/ "./Register").then((res) => ({
    default: res.Register,
  }))
);
