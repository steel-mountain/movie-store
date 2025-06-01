import clsx from "clsx"
import { CSSProperties } from "react"
import "./skeleton.scss"

interface SkeletonProps {
  height?: string
  width?: string
  border?: string
  className?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const { height, width, border, className } = props

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  }

  return <div className={clsx(className, "Skeleton")} style={styles}></div>
}
