import { Skeleton } from "../../shared/ui"

interface SkeletonCardListProps {
  count?: number
}

export const SkeletonCardList = ({ count = 10 }: SkeletonCardListProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-[260px] min-h-[480px]">
          <Skeleton width="260px" height="400px" className="mb-2" />
          <Skeleton width="260px" height="10px" className="mb-2" />
          <Skeleton height="10px" className="mb-2" />
          <Skeleton height="10px" />
        </div>
      ))}
    </>
  )
}
