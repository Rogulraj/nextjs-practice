import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Products and Reviews</header>
      {children}
    </>
  );
}
