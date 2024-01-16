"use client";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { ThemeSwitcher } from "./ThemeSwitcher";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 100 ? "shadow" : "shadow-none",
        `sticky top-0 z-50 w-full xmd:px-5 sm:px-0 `
      )}
    >
      <header
        className={`flex max-w-[62rem] px-5 sm:px-3 h-16 mx-auto justify-between items-center __className_f6433a `}
      >
        <Link href="/" aria-label="logo">
          <h1 className="font-bold cursor-pointer rounded-md __className_f6433a">
            WAHTODO
          </h1>
        </Link>
        <nav>
          <ul
            id="primary-navigation"
            className={`flex justify-center items-center gap-5 text-sm`}
          >
            <li className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
              <Link href="/#projects" aria-label="jay shim projects">
                About
              </Link>
            </li>

            <li className="px-2 py-1 cursor-pointer rounded-md hover:bg-gray-200 transition-all duration-300">
              <Link href="/todos" aria-label="jay shim about">
                TODOs
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
