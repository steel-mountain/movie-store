import { getAuthButtonClass } from "../buttonClasses"

describe("Button Classes", () => {
  test("user is logged", () => {
    const result = getAuthButtonClass(true)

    expect(result).toContain("bg-red-600")
  })

  test("user is not logged", () => {
    const result = getAuthButtonClass(false)

    expect(result).not.toContain("bg-red-600")
  })
})
