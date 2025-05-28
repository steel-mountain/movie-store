import { Link } from "react-router-dom";
import { useGetSimilarMoviesQuery } from "../../store/movies/movies.api";

export const SimilarMovies = () => {
  const {
    docs: data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetSimilarMoviesQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
      docs: data?.docs,
      isLoading,
      isError,
      isFetching,
    }),
  });

  const getSimilarMovies = data?.map((movie) => {
    return (
      <Link
        to={`/movie/${movie.id}`}
        key={movie.id}
        className="flex flex-col items-center justify-center gap-2 w-[200px] h-[400px] cursor-pointer"
      >
        <img
          src={movie.poster?.url}
          alt={movie.name}
          className=" w-[200px] h-[400px] object-cover rounded-lg hover:opacity-40"
        />
        <h3 className="text-lg font-semibold text-neutral-700 dark:text-white">
          {movie.name.length < 17
            ? movie.name
            : `${movie.name.slice(0, 17)}...`}
        </h3>
      </Link>
    );
  });

  const error = isError && (
    <p className="text-center text-4xl dark:text-white">Ошибка доступа...</p>
  );

  const loading = isLoading && isFetching && (
    <p className="text-center text-4xl dark:text-white">Loading...</p>
  );

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-neutral-700 mb-[25px] dark:text-white">
          Смотрите также
        </h2>
        {error}
        {loading}
        {data?.length > 0 && (
          <div className="flex flex-wrap gap-5 justify-center ss:justify-between mm:justify-start l:justify-between">
            {getSimilarMovies}
          </div>
        )}
      </section>
    </>
  );
};
