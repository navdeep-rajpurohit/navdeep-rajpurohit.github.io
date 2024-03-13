"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    href: "#contact",
  },
  {
    title: "Experience",
    href: "#contact",
  },
  {
    title: "Skills",
    href: "#contact",
  },
  {
    title: "Work",
    href: "#contact",
  },
];
const Menu = ({navLinks}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((item, index) => (
        <li key={index}>
          <NavLink href={item.href} title={item.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
