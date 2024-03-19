import React from "react";

import { notFound } from "next/navigation";

type PropsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};

function ReviewDetails(props: PropsType) {
  const { params } = props;
  const { productId, reviewId } = params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}

export default ReviewDetails;
