import { useSearchParams } from "react-router-dom";
import { Card, Paginate, SwitcherTheme } from "../../components";
import { useGetMoviesByQuery } from "../../store/movies/movies.api";

import {
  useAppDispatch,
  useAppSelector,
} from "../../services/useTypedSelector";
import { changeNewPage } from "../../store/movies/movies.slice";

const SearchResult: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { newPage } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const {
    docs: data = [],
    page,
    pageCount = 0,
    isLoading,
    isError,
    isFetching,
  } = useGetMoviesByQuery(
    { query, newPage },
    {
      selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
        docs: data?.docs,
        limit: data?.limit,
        page: data?.page,
        pageCount: data?.pages,
        isLoading,
        isError,
        isFetching,
      }),
    }
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    dispatch(changeNewPage(selected + 1));
  };

  const movies = data?.map((movie, i) => {
    return <Card query={`/search/${movie.id}`} key={i} movie={movie} />;
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[40px] relative">
        {isError && (
          <p className="text-4xl dark:text-white">Ошибка доступа...</p>
        )}
        {isLoading || isFetching ? (
          <p className="text-4xl dark:text-white">Loading...</p>
        ) : (
          movies
        )}
        <div className="absolute bottom-48 left-[-130px]">
          <SwitcherTheme />
        </div>
      </div>
      <div>
        {movies?.length !== 0 && !isFetching ? (
          <Paginate
            initialPage={page! - 1}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        ) : null}
      </div>
    </>
  );
};

export default SearchResult;
