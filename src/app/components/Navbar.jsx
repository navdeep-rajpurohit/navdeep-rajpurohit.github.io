"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XcicrleIcon } from "@heroicons/react/24/solid";
import Menu from "./Menu"

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <nav className="fixed mx-auto top-0  left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="font-mono text-2xl ml-1 md:text-4xl text-white font-semibold"
        >
          navdev
        </Link>
        <div className="mobile-menu block md:hidden">
          {!openNavbar ? (
            <button
              onClick={() => setOpenNavbar(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-10 mt-0 mr-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.href} title={item.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openNavbar ? <Menu navLinks={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;
