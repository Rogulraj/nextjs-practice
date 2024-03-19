import React from "react";

import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
  };
};

const About = () => {
  return (
    <div>
      <h1>About Page Custom (...)</h1>
      <Link href={"/f1/f3"}>F3</Link>
    </div>
  );
};

export default About;
