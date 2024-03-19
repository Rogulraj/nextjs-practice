import { Metadata } from "next";
import React from "react";

type PropsType = {
  params: {
    productId: string;
  };
};

export const generateMetadata = (props: PropsType): Metadata => {
  const { params } = props;
  const { productId } = params;
  return {
    title: `Product ${productId}`,
  };
};

function ProductDetails(props: PropsType) {
  const { params } = props;

  return <div>Product Details - {params.productId}</div>;
}

export default ProductDetails;
