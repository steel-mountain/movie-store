import { Card, SwitcherTheme } from "../../components";
import { useAppSelector } from "../../shared/services/hooks/useTypedSelector";

export const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.movies);
  const isAuth = Boolean(useAppSelector((state) => state.auth.data));

  const movies = favourites?.map((movie, i) => {
    return (
      <Card
        query={`/favourites/${movie.id}`}
        key={i}
        movie={movie}
        isFavourite
      />
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-[40px] relative">
      {isAuth && movies?.length !== 0 && movies}
      {isAuth && movies?.length === 0 && (
        <p className="text-4xl dark:text-white">
          Вы пока еще ничего не добавляли...
        </p>
      )}
      {!isAuth && (
        <p className="text-4xl dark:text-white">
          Авторизуйтесь чтобы добавить в избранное
        </p>
      )}
      <div className="absolute bottom-48 left-[-130px]">
        <SwitcherTheme />
      </div>
    </div>
  );
};
