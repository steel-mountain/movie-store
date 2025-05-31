import { forwardRef, InputHTMLAttributes, memo } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">

interface InputProps extends HTMLInputProps {
  onChange?: (value: string) => void
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { onChange, ...otherProps } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    return <input ref={ref} onChange={onChangeHandler} {...otherProps} />
  }),
)
