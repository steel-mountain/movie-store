import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../components";
import { useAppDispatch } from "../shared/hooks/useRedux";
import { fetchAuthMe } from "../shared/store/slices/auth/auth.slice";
import { CartoonsAsync as Cartoons } from "./Cartoons/CartoonsAsync";
import { FavouritesAsync as Favourites } from "./Favourites/FavouritesAsync";
import { HomePage } from "./HomePage/HomePage";
import { Layout } from "./Layout/Layout";
import { LoginAsync as Login } from "./Login/LoginAsync";
import { MovieAsync as Movie } from "./Movie/MovieAsync";
import { MoviesAsync as Movies } from "./Movies/MoviesAsync";
import { Page404 } from "./Page404/Page404";
import { RegisterAsync as Register } from "./Register/RegisterAsync";
import { SearchResultAsync as SearchResult } from "./SearchResult/SearchResultAsync";
import { SeriesAsync as Series } from "./Series/SeriesAsync";

function Pages() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

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
  );
}

export default Pages;
