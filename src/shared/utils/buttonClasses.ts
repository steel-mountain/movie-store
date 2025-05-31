export const getAuthButtonClass = (isAuth: boolean) => {
  const base =
    "h-[50px] p-[20px] text-default border rounded-lg border-default flex items-center text text-lg font-bold hover:text-white hover:bg-default"
  const auth = isAuth ? "bg-red-600 text-white border-none hover:bg-red-600" : ""
  return `${base} ${auth}`
}
