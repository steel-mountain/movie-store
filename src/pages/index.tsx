import { Suspense, useEffect } from "react"
import { useRoutes } from "react-router-dom"
import { appRoutes } from "../routes"
import { useAppDispatch } from "../shared/hooks/useRedux"
import { fetchAuthMe } from "../shared/store/slices/auth/auth.slice"
import { Loader } from "../shared/ui"

export const Pages = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])

  const routes = useRoutes(appRoutes)

  return <Suspense fallback={<Loader />}>{routes}</Suspense>
}
