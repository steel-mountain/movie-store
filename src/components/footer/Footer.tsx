import { AppLink } from "../../shared/ui"
import { Wrapper } from "../index"

export const Footer = () => {
  return (
    <Wrapper>
      <AppLink to="/" className="text-[#535353] hover:text-default font-bold text-3xl dark:text-[#FBFDFC]">
        Movie-store
      </AppLink>
      <p className="mt-[10px] text-xl text-[#373737] dark:text-white">
        2024 ООО "Movie-store". Все права защищены. 12+
      </p>
    </Wrapper>
  )
}
