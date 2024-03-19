import { Metadata } from "next";
import React from "react";

export const metadata = (): Metadata => {
  return {
    title: {
      absolute: "Photo Feed",
    },
  };
};

type PropsType = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

function PhotoFeedLayout(props: PropsType) {
  const { children, modal } = props;
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default PhotoFeedLayout;
