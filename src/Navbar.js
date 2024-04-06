import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-16 border-b-2 max-w-screen-xxl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img src='https://th.bing.com/th/id/OIP.Q42NGjaBYlQ87rsPCLfn-AHaEK?rs=1&pid=ImgDetMain' className="w-12 h-auto"></img>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-9 text-md">
              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Creation </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Business </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Growth </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </li>

              <li>
                <a className="text-black transition hover:text-blue-700" href="#"> Resources </a>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />

              </li>
              <div className="border-r h-6"></div>
              <li className="hidden lg:block">
                <a className="text-black transition hover:text-blue-700" href="#"> Enterprise </a>
              </li>

              <li className="hidden lg:block">
                <a className="text-black transition hover:text-blue-700" href="#"> Pricing </a>
              </li>

              <li className="hidden lg:block">
                <a className="text-black transition hover:text-blue-700" href="#"> Support </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                href="#"
                className='py-1'
              >
                <FontAwesomeIcon icon={faGlobe} size='lg' />
              </a>

              <a
                className="hidden border border-black rounded-xl bg-white px-5 py-1 text-sm font-medium transition hover:text-white hover:bg-blue-700 sm:block"
                href="#"
              >
                Sign In
              </a>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-blue-700 transition hover:text-gray-600/75 md:hidden"
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
            <a href="#" className="text-black transition hover:text-blue-700">Creation</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Business</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Growth</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Resources</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Enterprise</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Pricing</a>
          </li>
          <li>
            <a href="#" className="text-black transition hover:text-blue-700">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
