const Pagination = () => {
    return (


<ol class="flex justify-center gap-4 text-xs font-medium bg-slate-100 pb-32">
  <li className="text-lg">
    <a
      href="#"
      class="inline-flex size-8 items-center justify-center text-gray-300 rtl:rotate-180"
    >
      <span class="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-300"
    >
      1
    </a>
  </li>

  <li className="text-2xl">
  <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
    2
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
      3
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
      4
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
      5
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
      ...
    </a>
  </li>

  <li className="text-2xl">
    <a
      href="#"
      class="block size-8 text-center leading-8 text-gray-900"
    >
      73
    </a>
  </li>

  <li>
    <a
      href="#"
      class="inline-flex size-8 items-center justify-center text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>
</ol>
    )
}

export default Pagination;