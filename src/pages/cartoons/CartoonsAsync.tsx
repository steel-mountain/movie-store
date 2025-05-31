import { lazy } from "react"

export const Cartoons = lazy(() =>
  import(/*webpackChunkName:"[Cartoons]"*/ "./Cartoons").then((res) => ({
    default: res.Cartoons,
  })),
)
