import React from "react";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "About",
  };
};

const About = () => {
  return <div>About Page</div>;
};

export default About;
