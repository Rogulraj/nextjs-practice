import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: "Products",
  };
};

function Products() {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}

export default Products;
