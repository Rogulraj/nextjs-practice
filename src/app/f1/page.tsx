import Link from "next/link";
import React from "react";

function F1Page() {
  return (
    <div>
      <h1>F1Page Default</h1> <Link href={"/f1/f2"}>F2</Link>
    </div>
  );
}

export default F1Page;
