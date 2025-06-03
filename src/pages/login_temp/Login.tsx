import { Controller, useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useRedux"
import { fetchAuthLogin } from "../../shared/store/slices/auth/auth.thunks"
import { UserLogin } from "../../shared/types/users"
import { Button, Input } from "../../shared/ui"

export const Login = () => {
  const isAuth = Boolean(useAppSelector((state) => state.auth.data))
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<UserLogin>({ mode: "onChange" })

  const onSubmit = async (value: UserLogin) => {
    const data = await dispatch(fetchAuthLogin(value))
    if (!data.payload) {
      return alert("Не удалось авторизоваться!")
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token)
    }
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <section className="bg-white max-w-[400px] mx-auto p-[50px] rounded-xl dark:bg-[#0B0C0E]">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-7 dark:text-default">Вход в аккаунт</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Укажите почту" }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Email"
              type="email"
              className="w-full p-[15px] border border:#CACACA dark:bg-[#1B1E25] dark:text-white"
            />
          )}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Укажите почту",
            minLength: { value: 6, message: "Пароль должен быть не менее 6 символов" },
          }}
          render={({ field: { onChange } }) => (
            <Input
              onChange={onChange}
              placeholder="Password"
              type="password"
              className="w-full p-[15px] border border:#CACACA mt-5 dark:bg-[#1B1E25] dark:text-white"
            />
          )}
        />
        <div className="text-red-600">{errors.password?.message}</div>
        <Button
          disabled={!isValid}
          type="submit"
          className={`mt-5 text-white bg-default w-full p-[8px] ${!isValid ? "bg-opacity-50" : null}`}
        >
          Войти
        </Button>
      </form>
    </section>
  )
}
