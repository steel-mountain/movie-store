import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Card, Paginate } from "../../components"
import { useGetSeriesQuery } from "../../shared/store/slices/movies/movies.api"

export const Series = () => {
  const [searchParams] = useSearchParams()

  const page = Number(searchParams.get("page") || "1")
  const navigate = useNavigate()

  const {
    docs: data = [],
    pageCount = 0,
    isLoading,
    isError,
    isFetching,
  } = useGetSeriesQuery(page, {
    selectFromResult: ({ data, isLoading, isError, isFetching }) => ({
      docs: data?.docs,
      limit: data?.limit,
      page: data?.page,
      pageCount: data?.pages,
      isLoading,
      isError,
      isFetching,
    }),
  })

  useEffect(() => {
    navigate(`?page=${page}`)
  }, [page, navigate])

  const handlePageClick = ({ selected }: { selected: number }) => {
    navigate(`?page=${selected + 1}`)
  }

  const series = data?.map((series, i) => {
    return <Card query={`/series/${series.id}`} key={i} movie={series} />
  })

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[40px] relative">
        {isError && <p className="text-4xl dark:text-white">Ошибка доступа...</p>}
        {isLoading || isFetching ? <p className="text-4xl dark:text-white">Loading...</p> : series}
      </div>
      <div>
        {series?.length !== 0 && !isFetching ? (
          <Paginate initialPage={page - 1} pageCount={pageCount} handlePageClick={handlePageClick} />
        ) : null}
      </div>
    </>
  )
}
