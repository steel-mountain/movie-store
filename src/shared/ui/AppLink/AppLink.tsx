import { memo } from "react"
import { Link, LinkProps } from "react-router-dom"

interface AppLinkProps extends LinkProps {
  children: React.ReactNode
}

export const AppLink = memo<AppLinkProps>((props) => {
  const { children, ...otherProps } = props

  return <Link {...otherProps}>{children}</Link>
})
