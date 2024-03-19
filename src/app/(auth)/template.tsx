"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type PropsType = {
  children: React.ReactNode;
};

type LinkType = {
  title: string;
  link: `/${string}`;
}[];

const navLink: LinkType = [
  { title: "Login", link: "/login" },
  { title: "Register", link: "/register" },
  { title: "Forgot-Password", link: "/forgot-password" },
];

export default function AuthLayout(props: PropsType) {
  const { children } = props;

  const pathName = usePathname();
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <>
      <header>Auth Layout</header>
      <input placeholder="type.." onChange={(e) => setInput(e.target.value)} />
      <nav
        style={{ backgroundColor: "olivedrab", display: "flex", gap: "1rem" }}>
        {navLink.map((item, _index) => {
          const isActive = pathName.startsWith(item.link);
          console.log(pathName, isActive);
          return (
            <Link
              href={item?.link}
              key={_index}
              style={{
                color: isActive ? "royalblue" : "white",
                fontWeight: isActive ? "600" : "500",
              }}>
              {item?.title}
            </Link>
          );
        })}
      </nav>
      {children}
      <footer>@auth layout</footer>
    </>
  );
}
