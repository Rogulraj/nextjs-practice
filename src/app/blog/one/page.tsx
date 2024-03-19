import Link from "next/link";
import React from "react";

function One() {
  return (
    <div>
      <h1>Blog One</h1> <Link href={"/blog/two"}>Two</Link>
    </div>
  );
}

export default One;
