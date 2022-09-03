import { html } from 'https://unpkg.com/lit-html?module'

export const navbar = (
  logoPath,
  background = 'bg-transparent',
  url = ''
) => html`
  <nav
    data-nav
    class="${background} fixed top-0 z-40 w-full transition-colors duration-200 ease-linear will-change-contents"
  >
    <div
      class="flex flex-wrap items-center justify-between py-4 px-6 text-text md:px-12"
    >
      <a href="https://www.rcciit.org/" class="flex items-center">
        <img src="${logoPath}" class="mr-3 h-9 w-5" alt="RCCIIT Logo" />
        <p
          class="self-center whitespace-nowrap text-min-xs font-bold md:text-max-sm"
        >
          RCC Institute of Information Technology
          <span class="block text-min-us font-medium sm:text-max-xs">
            Canal South Road. Beliaghata. Kolkata - 700 015
          </span>
        </p>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="ml-3 inline-flex items-center rounded-lg p-2 text-min-base text-text active:outline-none active:ring-2 active:ring-accent md:hidden md:text-min-base md:hover:bg-accent"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open menu</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="md:text-sm mt-4 flex flex-col overflow-hidden rounded-lg bg-background text-min-base md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:text-min-base md:font-medium"
        >
          <li>
            <a
              href="${url}#home"
              class="block border-b border-text py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              >Home</a
            >
          </li>
          <li>
            <a
              href="${url}#artist"
              class="block border-b border-text py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              aria-current="Artist"
              >Dates</a
            >
          </li>
          <li>
            <a
              href="${url}events/"
              class="block border-b border-text py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              >Events</a
            >
          </li>
          <li data-wip>
            <a
              href="about/"
              class="block border-b border-text py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              >About</a
            >
          </li>
          <li>
            <a
              href="${url}#gallery"
              class="block border-b border-text py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              >Gallery</a
            >
          </li>
          <li>
            <a
              href="${url}#contact"
              class="block py-2 pr-4 pl-3 text-text active:bg-accent md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-accent"
              aria-current="Contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
`
