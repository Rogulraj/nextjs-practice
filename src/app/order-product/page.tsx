"use client";

import React from "react";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();

  const changePath = () => {
    console.log("Order Placed Successfully");
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={changePath}>Place Order</button>
    </div>
  );
}

export default OrderProduct;
