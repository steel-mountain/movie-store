import { RouteObject } from "react-router-dom"
import { Cartoons } from "../pages/Cartoons/Cartoons"
import { Favourites } from "../pages/Favourites/Favourites"
import { HomePage } from "../pages/HomePage/HomePage"
import { Layout } from "../pages/Layout/Layout"
import { Login } from "../pages/Login/Login"
import { Movie } from "../pages/Movie/Movie"
import { Movies } from "../pages/Movies/Movies"
import { Page404 } from "../pages/Page404/Page404"
import { Register } from "../pages/Register/Register"
import { SearchResult } from "../pages/SearchResult/SearchResult"
import { Series } from "../pages/Series/Series"

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <Movies /> },
      { path: "series", element: <Series /> },
      { path: "cartoons", element: <Cartoons /> },
      { path: "favourites", element: <Favourites /> },
      { path: "search", element: <SearchResult /> },
      { path: "auth/login", element: <Login /> },
      { path: "auth/register", element: <Register /> },
      { path: ":movie/:id", element: <Movie /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]
