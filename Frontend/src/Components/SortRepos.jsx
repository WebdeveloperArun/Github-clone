import React from "react";

const SortRepos = ({ onSort, sortType }) => {
 return (
  <div
   className="inline-flex justify-end gap-2 rounded-md shadow-sm w-full my-6"
   role="group"
  >
   <button
    type="button"
    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
     sortType === "recent" ? "border-blue-500" : ""
    }`}
    onClick={() => onSort("recent")}
   >
    Most Recent
   </button>
   <button
    type="button"
    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
     sortType === "stars" ? "border-blue-500" : ""
    }`}
    onClick={() => onSort("stars")}
   >
    Most Stars
   </button>
   <button
    type="button"
    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
     sortType === "forks" ? "border-blue-500" : ""
    }`}
    onClick={() => onSort("forks")}
   >
    Most Forks
   </button>
  </div>
 );
};

export default SortRepos;
