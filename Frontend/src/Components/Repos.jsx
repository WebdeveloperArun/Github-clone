import React from "react";
import toast from "react-hot-toast";

// const repositories = [
//  {
//   name: "awesome-project",
//   description: "A really awesome project that does amazing things",
//   language: "TypeScript",
//   stars: 1234,
//   forks: 567,
//   updatedAt: "2023-11-15T10:30:00Z",
//  },
//  {
//   name: "cool-app",
//   description: "A cool application built with React and Node.js",
//   language: "JavaScript",
//   stars: 890,
//   forks: 123,
//   updatedAt: "2023-11-10T14:45:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
//  {
//   name: "useful-library",
//   description: "A useful library for handling common programming tasks",
//   language: "Python",
//   stars: 456,
//   forks: 78,
//   updatedAt: "2023-11-05T09:15:00Z",
//  },
// ];

const formatDate = (dateString) => {
 const options = { year: "numeric", month: "short", day: "numeric" };
 return new Date(dateString).toLocaleDateString(undefined, options);
};

const handleClone = async (url) => {
    try {
        await navigator.clipboard.writeText(url);
        toast.success("Copied to clipboard");
    } catch (error) {
        toast.error("Failed to copy to clipboard");
    }
}

function Repos({ repositories }) {
 return (
  <div className="w-full max-w-3xl bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg">
   <h2 className="text-2xl font-bold mb-6">Repositories</h2>
   <ul className="space-y-6">
    {repositories &&
     repositories.map((repo) => (
      <li
       key={repo?.name}
       className="border-t border-gray-700 pt-6 first:border-t-0 first:pt-0"
      >
       <div className="flex justify-between items-start">
        <div>
         <h3 className="text-xl font-semibold text-blue-400 hover:underline cursor-pointer">
          {repo?.name}
         </h3>
         <p className="text-sm text-gray-400 mt-1">
          {repo.description ? repo.description : "No description"}
         </p>
        </div>
        <button className="text-gray-400 hover:text-gray-300 focus:outline-none">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
         >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
         </svg>
        </button>
        
       </div>
       
       <div className="flex items-center mt-3 text-sm text-gray-400">
        {repo.language && (
         <span className="flex items-center mr-4">
          <span className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></span>
          {repo?.language}
         </span>
        )}
        {repo?.stargazers_count > 0 && (
         <span className="flex items-center mr-4">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-4 w-4 mr-1"
           viewBox="0 0 20 20"
           fill="currentColor"
          >
           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {repo.stargazers_count}
         </span>
        )}
        {repo?.forks > 0 && (
         <span className="flex items-center mr-4">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-4 w-4 mr-1"
           viewBox="0 0 20 20"
           fill="currentColor"
          >
           <path
            fillRule="evenodd"
            d="M7.646 5.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 6.707V10.5a.5.5 0 01-1 0V6.707L6.354 7.854a.5.5 0 11-.708-.708l2-2zM6 15a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm8-11a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm0 10a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
           />
          </svg>
          {repo.forks}
         </span>
        )}
        <span>Updated on {formatDate(repo?.updated_at)}</span>
        <button onClick={() => handleClone(repo?.clone_url)} className="ml-4 border border-blue-950 px-3 py-1 rounded-xl">Clone</button>
       </div>
      </li>
     ))}
   </ul>
  </div>
 );
}

 export default Repos;
