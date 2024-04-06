import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarSec = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-14 border-t border-b-2 max-w-screen-xxl items-center gap-8 px-6 sm:px-10 lg:px-16">

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-sm">
              <li>
                <a className="text-black transition hover:text-blue-700 xl:hidden" href="#">Business <FontAwesomeIcon icon={faChevronDown} size="xs" /></a>
                <a className="text-black transition hover:text-blue-700 hidden xl:block" href="#">Business & Services <FontAwesomeIcon icon={faChevronDown} size="xs" /></a>
                
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Store </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Creative </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Community </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />

              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Blog </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-blue-700 transition hover:text-black xl:hidden" href="#"> All </a>
                  <a className="text-blue-700 transition hover:text-black hidden xl:block" href="#"> All Templates </a>
                </li>
                <div className="border-r h-6"></div>
                <li>
                <a className="text-black transition hover:text-blue-700 xl:hidden" href="#"> Blank </a>
                  <a className="text-black transition hover:text-blue-700 hidden xl:block" href="#"> Blank Templates </a>
                </li>
                <div className="border-r h-6"></div>
                <li>
                  <a className="text-black transition hover:text-blue-700" href="#"> Collections </a>
                  <FontAwesomeIcon icon={faChevronDown} size="xs" />
                </li>
              </ul>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-blue-700 lg:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className={isOpen ? 'block' : 'hidden'} id="mobile-menu">
        <ul className="flex flex-col items-center gap-4 text-md py-2">
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Business</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Store</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Creative</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Community</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarSec;
