import { useMemo } from "react"
import { useGetSimilarMoviesQuery } from "../../shared/store/slices/movies/movies.api"
import { AppLink, Skeleton } from "../../shared/ui"

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
  })

  const similarMovies = useMemo(() => {
    return data?.map((movie) => (
      <AppLink
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
          {movie.name.length < 17 ? movie.name : `${movie.name.slice(0, 17)}...`}
        </h3>
      </AppLink>
    ))
  }, [data])

  const skeleton = (
    <div className="flex flex-wrap gap-5 justify-center ss:justify-between mm:justify-start l:justify-between">
      {Array.from({ length: 6 }).map(() => (
        <div className="flex flex-col items-center justify-center gap-2 w-[200px] h-[400px]">
          <Skeleton width="200px" height="400px" border="8px" />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-neutral-700 mb-[25px] dark:text-white">Смотрите также</h2>
        {isError && <p className="text-center text-4xl dark:text-white">Ошибка доступа...</p>}
        {isLoading && isFetching && skeleton}
        {data?.length > 0 && (
          <div className="flex flex-wrap gap-5 justify-center ss:justify-between mm:justify-start l:justify-between">
            {similarMovies}
          </div>
        )}
      </section>
    </>
  )
}
