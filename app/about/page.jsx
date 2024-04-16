import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
        Why a Scrabble App?
      </h2>
      <div class="p-5 pl-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">
          Ever played chess online and used the AI to analyse your game? The
          Scrabble App is designed to help you achieve the same goal (and not to
          cheat!)
        </p>
      </div>
      <h2 class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
        How do I use the Scrabble App?
      </h2>
      <div class="p-5 pl-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">
          Enter 1-7 player letters and 1 board letter into the input boxes. The
          resulting anagrams list will display words that include the board
          letter and are longer than 2 letters.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">
          Your previous searches will automatically save. Due to API
          limitations, there is a button you will need to hit in order to see
          your past searches.
        </p>
      </div>
      <h2 class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
        What tools did you use for this App?
      </h2>
      <div class="p-5 pl-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">
          <ul>
            <li>
              <a
                href="http://www.anagramica.com/api"
                class="underline font-bold text-scrabble-green"
              >
                Anagramica
              </a>
              , developed by Max Irwin.
            </li>
            <li>
              <p>
                {" "}
                <a
                  href="https://flowbite.com/"
                  class="underline font-bold text-scrabble-green"
                >
                  Flowbite
                </a>
                , (UI component library){" "}
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://getpantry.cloud/#"
                  class="underline font-bold text-scrabble-green"
                >
                  Pantry
                </a>
                , (data storage service)
              </p>
            </li>
          </ul>
        </p>
      </div>
      <h2 class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
        Upcoming fixes
      </h2>
      <div class="p-5 pl-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">Pending</p>
      </div>
      <h2 class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
        Future features
      </h2>
      <div class="p-5 pl-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p class="mb-2 text-gray-500 dark:text-gray-400 padding">Pending</p>
      </div>
    </div>
  );
}
