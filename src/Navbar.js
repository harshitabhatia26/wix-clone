import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
      <header class="bg-white shadow-md">
  <div class="mx-auto flex h-16 border-b-2 max-w-screen-xxl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <img src='https://th.bing.com/th/id/OIP.Q42NGjaBYlQ87rsPCLfn-AHaEK?rs=1&pid=ImgDetMain' class="w-12 h-auto"></img>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-9 text-md">
          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Creation </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Business </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Growth </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
          </li>

          <li>
            <a class="text-black transition hover:text-gray-500/75" href="#"> Resources </a>
            <FontAwesomeIcon icon={faChevronDown} size="xs"/>
            
          </li>
          <div className="border-r h-6"></div>
          <li class="hidden lg:block">
            <a class="text-black transition hover:text-gray-500/75" href="#"> Enterprise </a>
          </li>

          <li class="hidden lg:block">
            <a class="text-black transition hover:text-gray-500/75" href="#"> Pricing </a>
          </li>

          <li class="hidden lg:block">
            <a class="text-black transition hover:text-gray-500/75" href="#"> Support </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            href="#"
            class='py-1'
          >
            <FontAwesomeIcon icon={faGlobe} size='lg'/>
          </a>

          <a
          class="hidden border border-black rounded-xl bg-white px-5 py-1 text-sm font-medium transition hover:text-teal-600/75 sm:block"
            href="#"
          >
            Sign In
          </a>
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

export default Navbar;
