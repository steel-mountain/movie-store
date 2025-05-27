import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { UserLogin } from "../../models/models-Users";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/useTypedSelector";
import { fetchAuthLogin } from "../../store/movies/auth.slice";

const Login: React.FC = () => {
  const isAuth = Boolean(useAppSelector((state) => state.auth.data));
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserLogin>({ mode: "onChange" });

  const onSubmit = async (value: UserLogin) => {
    const data = await dispatch(fetchAuthLogin(value));
    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <section className="bg-white max-w-[400px] mx-auto p-[50px] rounded-xl">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-7">
        Вход в аккаунт
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-[15px] border border:#CACACA"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Укажите почту",
          })}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <input
          className="w-full p-[15px] border border:#CACACA mt-5"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Укажите пароль",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
        />
        <div className="text-red-600">{errors.password?.message}</div>
        <button
          disabled={!isValid}
          type="submit"
          className={`mt-5 text-white bg-default w-full p-[8px] ${
            !isValid ? "bg-opacity-50" : null
          }`}
        >
          Войти
        </button>
      </form>
    </section>
  );
};

export default Login;
