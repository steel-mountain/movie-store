import { lazy } from "react"

export const Login = lazy(() =>
  import(/* webpackChunkName:"[Login]"*/ "./Login").then((res) => ({
    default: res.Login,
  })),
)
