import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { IUserRegister } from "../../models/models-Users";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/useTypedSelector";
import { fetchAuthRegister } from "../../store/movies/auth.slice";

const Register = () => {
  const isAuth = Boolean(useAppSelector((state) => state.auth.data));
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUserRegister>({ mode: "onChange" });

  const onSubmit = async (value: IUserRegister) => {
    const data = await dispatch(fetchAuthRegister(value));
    if (!data.payload) {
      return alert("Не удалось зарегистрироваться!");
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
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-3">
        Создание аккаунта
      </h1>
      <img className="w-[120] h-[120px] mx-auto" src={avatar} alt="avatar" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-[15px] border border:#CACACA"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Укажите имя",
            minLength: {
              value: 3,
              message: "Имя должно быть не меньше 3 символов",
            },
          })}
        />
        <div className="text-red-600">{errors.name?.message}</div>
        <input
          className="w-full p-[15px] border border:#CACACA mt-5"
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
          Зарегистрироваться
        </button>
      </form>
    </section>
  );
};

export default Register;
