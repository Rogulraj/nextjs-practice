import Link from "next/link";
import React from "react";

function F3Page() {
  return (
    <div>
      <h1>F3Page default</h1>
      <Link href={"/f1/f4"}>F4</Link>
      <br />
      <Link href={"/about"}>About</Link>
    </div>
  );
}

export default F3Page;
