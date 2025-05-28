import { FC, memo } from "react";
import StarRatings from "react-star-ratings";

interface RatingProps {
  rating: number;
}

export const Rating: FC<RatingProps> = memo(({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#33A8F6"
      numberOfStars={10}
      starSpacing="3px"
      starDimension={"20px"}
    />
  );
});
