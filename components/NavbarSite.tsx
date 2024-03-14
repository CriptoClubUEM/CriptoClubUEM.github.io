import { useState } from "react";
import Link from "next/link";

const NavbarSite = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar z-40 flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
          >
            Nombres Camaró
          </Link>
        </div>
        <div className="flex flex-col mr-4 md:mr-14">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {showMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 7h16v-2H4v2zm0 5h16v-2H4v2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:flex-row md:gap-10 md:px-1 md:justify-end mr-10">
          <li className="hover:text-[#D22029]">
            <Link href="/" className="hover:bg-white">
              HOME
            </Link>
          </li>
          <li className="hover:text-[#D22029]">
            <Link href="/coleccion" className="hover:bg-white">
              COLECCIÓN
            </Link>
          </li>
          <li className="hover:text-[#D22029]">
            <Link href="/equipo" className="hover:bg-white">
              EQUIPO
            </Link>
          </li>
        </ul>
      </div>
      {showMenu && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col items-center">
            <li className="hover:text-[#D22029]">
              <Link href="/" className="hover:bg-white">
                HOME
              </Link>
            </li>
            <li className="hover:text-[#D22029]">
              <Link href="/coleccion" className="hover:bg-white">
                COLECCIÓN
              </Link>
            </li>
            <li className="hover:text-[#D22029]">
              <Link href="/equipo" className="hover:bg-white">
                EQUIPO
              </Link>
            </li>
            <li className="hover:text-[#D22029]">
              <Link href="/faq" className="hover:bg-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarSite;
