import { FC, ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <section className="l:container w-full mx-auto py-6 px-4 ">{children}</section>
}
