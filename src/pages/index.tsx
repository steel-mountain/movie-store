import { Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useAppDispatch } from "../shared/hooks/useRedux"
import { fetchAuthMe } from "../shared/store/slices/auth/auth.slice"
import { Loader } from "../shared/ui"
import { Cartoons } from "./Cartoons/CartoonsAsync"
import { Favourites } from "./Favourites/FavouritesAsync"
import { HomePage } from "./HomePage/HomePage"
import { Layout } from "./Layout/Layout"
import { Login } from "./Login/LoginAsync"
import { Movie } from "./Movie/MovieAsync"
import { Movies } from "./Movies/MoviesAsync"
import { Page404 } from "./Page404/Page404"
import { Register } from "./Register/RegisterAsync"
import { SearchResult } from "./SearchResult/SearchResultAsync"
import { Series } from "./Series/SeriesAsync"

function Pages() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="cartoons" element={<Cartoons />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path=":movie/:id" element={<Movie />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Pages
