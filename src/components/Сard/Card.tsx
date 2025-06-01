import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../../providers/ThemeProvider/useTheme"
import { Heart, HeartFavourite, HeartWhite } from "../../shared/assets"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux"
import { addFavourites, removeFavourite } from "../../shared/store/slices/movies/movies.slice"
import { Movies } from "../../shared/types"
import { Button, Icon } from "../../shared/ui"
import { Rating } from "../index"

interface CardProps {
  movie: Movies
  query: string
}

export const Card: FC<CardProps> = ({ movie, query }) => {
  const { theme } = useTheme()

  const dispatch = useAppDispatch()

  const favourite = useAppSelector((state) => state.movies.favourites.find((item) => item.id === movie.id))
  const isAuth = Boolean(useAppSelector((state) => state.auth.data))

  const [isFav, setIsFav] = useState(typeof favourite === "object" ? true : false)

  const handleFavourite = () => {
    if (isFav) {
      setIsFav(false)
      dispatch(removeFavourite(movie))
    } else {
      setIsFav(true)
      dispatch(addFavourites(movie))
    }
  }

  return (
    <div className="w-[260px] min-h-[480px]">
      <div className="bg-[rgba(0,0,0,.5)]">
        <Link to={query}>
          <img
            className="mb-2 w-[260px] h-[400px] hover:opacity-40"
            src={movie.poster?.url}
            alt={movie.name}
          />
        </Link>
      </div>
      <Rating rating={movie.rating.kp} />
      <p className="mt-2 text-[#373737] font-medium text-xl dark:text-white">
        {movie.name.length < 21 ? movie.name : `${movie.name.slice(0, 21)}...`}
      </p>
      <div className="flex justify-between">
        <p className="text-[#C3C3C3] font-medium text-lg">{movie.year}</p>
        {isAuth && (
          <Button className="block w-[25px] h-[25px]" onClick={handleFavourite}>
            <Icon
              Svg={isFav ? HeartFavourite : theme ? Heart : HeartWhite}
              className="block w-[25px] h-[25px]"
            />
          </Button>
        )}
      </div>
    </div>
  )
}
