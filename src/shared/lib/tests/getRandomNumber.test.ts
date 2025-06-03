import { getRandomNumber } from "../getRandomNumber"

describe("getRandomNumber", () => {
  test("should return number >= min", () => {
    const result = getRandomNumber(10, 20)

    expect(result).toBeGreaterThanOrEqual(10)
  })

  test("should return number < max", () => {
    const result = getRandomNumber(10, 20)

    expect(result).toBeLessThan(20)
  })
})
