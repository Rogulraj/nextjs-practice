"use client";

import Link from "next/link";
import React, { useEffect } from "react";

function Two() {
  useEffect(() => {
    throw new Error("Server Error");
  }, []);
  return (
    <div>
      <h1>Blog Two</h1>
      <Link style={{ color: "white" }} href={"/blog/one"}>
        One
      </Link>
    </div>
  );
}

export default Two;
