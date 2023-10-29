export const Button = ({ buttonText }) => {
  return (
    <button class="relative inline-flex items-center justify-center w-64 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-2.5 transition-all ease-in w-64 duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {buttonText}
      </span>
    </button>
  );
};
