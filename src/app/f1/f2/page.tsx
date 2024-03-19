import Link from "next/link";
import React from "react";

function F2Page() {
  return (
    <div>
      <h1>F2Page default</h1>
      <Link href={"/f1"}>F1</Link>
    </div>
  );
}

export default F2Page;
