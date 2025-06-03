import { Button } from "../../shared/ui"

export const PageError = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p>Произошла непредвиденная ошибка"</p>
      <div>
        <Button className="p-4 bg-green-500 text-white hover:scale-110" onClick={reloadPage}>
          Обновите страницу
        </Button>
      </div>
    </div>
  )
}
