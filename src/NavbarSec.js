import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarSec = () => {
  return (
      <header class="bg-white shadow-md">
  <div class="mx-auto flex h-14 border-t border-b-2 max-w-screen-xxl items-center gap-8 px-6 sm:px-10 lg:px-16">

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-9 text-sm">
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Business & Services </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Store </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Creative </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Community </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
            
          </li>
          
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Blog </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
        <ul class="flex items-center gap-9 text-sm">
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> All Templates </a>
          </li>
          <div className="border-r h-6"></div>
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Blank Templates </a>
          </li>
          <div className="border-r h-6"></div>
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Collections </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>
        </ul>
        </div>

        <button
          class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  );
}

export default NavbarSec;
