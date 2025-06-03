import { Suspense, useEffect } from "react"
import { useRoutes } from "react-router-dom"
import { appRoutes } from "../routes"
import { useAppDispatch } from "../shared/hooks/useRedux"
import { fetchAuthMe } from "../shared/store/slices/auth/auth.thunks"
import { Loader } from "../shared/ui"

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [dispatch])

  const routes = useRoutes(appRoutes)

  return <Suspense fallback={<Loader />}>{routes}</Suspense>
}
