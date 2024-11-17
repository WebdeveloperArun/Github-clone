import React from "react";
import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
 return (
  
  <>
   <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
       <th scope="col" className="p-4">
        <div className="flex items-center">
          no
        </div>
       </th>
       <th scope="col" className="px-6 py-3">
        Username
       </th>
       <th scope="col" className="px-6 py-3">
        Date
       </th>
       <th scope="col" className="px-6 py-3">
        Action  
       </th>
      </tr>
     </thead>
     <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
       <td className="w-4 p-4">
        <div className="flex items-center">
          1
        </div>
       </td>
       <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
       >
        <img
         className="w-10 h-10 rounded-full"
         src="/docs/images/people/profile-picture-1.jpg"
         alt="Jese image"
        />
        <div className="ps-3">
         <div className="text-base font-semibold">Neil Sims</div>
        </div>
       </th>
       <td className="px-6 py-4">React Developer</td>
       <td className="px-6 py-4">
        <div className="flex items-center">
         <div className="flex items-center">
         <FaHeart size={22} className="text-red-500 mx-2" />
         Liked your profile
       </div>
       </div>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
  </>
 );
};

export default LikesPage;
