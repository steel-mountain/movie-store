import { ButtonHTMLAttributes, memo } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  className?: string
  children?: React.ReactNode
}

export const Button = memo<ButtonProps>((props) => {
  const { className, children, ...otherProps } = props

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  )
})
