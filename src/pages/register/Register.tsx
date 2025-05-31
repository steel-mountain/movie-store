import { Controller, useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { avatar } from "../../shared/assets"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux"
import { fetchAuthRegister } from "../../shared/store/slices/auth/auth.slice"
import { UserRegister } from "../../shared/types"
import { Button, Input } from "../../shared/ui"

export const Register = () => {
  const isAuth = Boolean(useAppSelector((state) => state.auth.data))
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<UserRegister>({ mode: "onChange" })

  const onSubmit = async (value: UserRegister) => {
    const data = await dispatch(fetchAuthRegister(value))
    if (!data.payload) {
      return alert("Не удалось зарегистрироваться!")
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <section className="bg-white max-w-[400px] mx-auto p-[50px] rounded-xl">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-3">Создание аккаунта</h1>
      <img className="w-[120] h-[120px] mx-auto" src={avatar} alt="avatar" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Укажите имя",
            minLength: { value: 3, message: "Имя должно быть не меньше 3 символов" },
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Name"
              type="text"
              className="w-full p-[15px] border border:#CACACA"
            />
          )}
        />
        <div className="text-red-600">{errors.name?.message}</div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Укажите почту",
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Email"
              type="email"
              className="w-full p-[15px] border border:#CACACA mt-5"
            />
          )}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Укажите пароль",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Password"
              type="password"
              className="w-full p-[15px] border border:#CACACA mt-5"
            />
          )}
        />
        <div className="text-red-600">{errors.password?.message}</div>
        <Button
          disabled={!isValid}
          type="submit"
          className={`mt-5 text-white bg-default w-full p-[8px] ${!isValid ? "bg-opacity-50" : null}`}
        >
          Зарегистрироваться
        </Button>
      </form>
    </section>
  )
}
