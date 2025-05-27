import { FC, memo } from "react";
import StarRatings from "react-star-ratings";

interface IStarRatingsProps {
  rating: number;
}

const Rating: FC<IStarRatingsProps> = memo(({ rating }) => {
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

export default Rating;
