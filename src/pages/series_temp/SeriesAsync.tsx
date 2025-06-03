import { lazy } from "react"

export const Series = lazy(() =>
  import(/*webpackChunkName:"[Movies]"*/ "./Series").then((res) => ({
    default: res.Series,
  })),
)
