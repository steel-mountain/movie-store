import { RouteObject } from "react-router-dom"
import { Cartoons } from "../pages/Cartoons/CartoonsAsync"
import { Favourites } from "../pages/Favourites/FavouritesAsync"
import { HomePage } from "../pages/HomePage/HomePage"
import { Layout } from "../pages/Layout/Layout"
import { Login } from "../pages/Login/LoginAsync"
import { Movie } from "../pages/Movie/MovieAsync"
import { Movies } from "../pages/Movies/MoviesAsync"
import { Page404 } from "../pages/Page404/Page404"
import { Register } from "../pages/Register/RegisterAsync"
import { SearchResult } from "../pages/SearchResult/SearchResultAsync"
import { Series } from "../pages/Series/SeriesAsync"

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
