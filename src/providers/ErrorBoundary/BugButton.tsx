import { useState } from "react"
import { Button } from "../../shared/ui"

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false)

  const onThrow = () => {
    setError(true)
  }

  if (error) {
    throw new Error()
  }

  return (
    <Button onClick={onThrow} className=" bg-red-600 text-xl">
      BugButton
    </Button>
  )
}
