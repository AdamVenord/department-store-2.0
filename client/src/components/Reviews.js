import React from "react"
import Review from "./Review"

const Reviews = ({ reviews, }) => {
  return reviews.map( review => (
    <Review key={review.id} {...review } />
  ))
}

export default Reviews