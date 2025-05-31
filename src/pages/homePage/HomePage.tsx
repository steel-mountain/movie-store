import { SwitcherTheme } from "../../components";
import { star } from "../../shared/assets";
import { useGetMovieRandomQuery } from "../../shared/store/slices/movies/movies.api";

export const HomePage = () => {
  const { data: poster, isLoading, isError } = useGetMovieRandomQuery();

  const watch = poster?.watchability?.items.filter((item) => item.name);

  return (
    <>
      {isError && (
        <p className="text-center text-4xl dark:text-white">
          Ошибка доступа...
        </p>
      )}
      {isLoading && (
        <p className="text-center text-4xl dark:text-white">Loading...</p>
      )}
      {poster && poster !== undefined && (
        <section className="m:flex m:justify-between px-5 mt-[70px] relative">
          <img
            className="w-[300px] h-[400px] m-auto mb-[10px]"
            src={poster.poster.url}
            alt="poster"
          />
          <div className="ml-[40px]">
            <h2 className="text-2xl font-bold dark:text-white mb-[20px]">
              {poster.name}, {poster.alternativeName}
            </h2>
            <div className="flex items-center text-2xl font-semibold dark:text-white mb-[20px]">
              <img
                className="w-[35px] h-[35px] mr-[10px]"
                src={star}
                alt="star"
              />
              <span>{poster.rating.kp.toFixed(1)}</span>
            </div>
            <p className="mb-[15px] dark:text-white">{poster.description}</p>
            <div className="">
              {watch?.map((item, i) => (
                <a
                  href={item.url}
                  key={i}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-block p-[10px] mb-5 mr-[10px] cursor-pointer text-white bg-default font-bold text-xl rounded"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="absolute bottom-16 left-[-130px]">
            <SwitcherTheme />
          </div>
        </section>
      )}
    </>
  );
};
