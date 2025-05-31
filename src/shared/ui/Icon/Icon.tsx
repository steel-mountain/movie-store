import React, { memo } from "react"

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props

  return <Svg className={className} {...otherProps} />
})
