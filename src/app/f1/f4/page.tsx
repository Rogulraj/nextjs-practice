import Link from "next/link";
import React from "react";

function F4Page() {
  return (
    <div>
      <h1>F4Page default</h1>
      <Link href={"/f1/f3"}>F3</Link>
    </div>
  );
}

export default F4Page;
