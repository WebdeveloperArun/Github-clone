import React from 'react'
import {  useNavigate } from 'react-router-dom';

const ProfileInfo = ({profileData}) => {

  const navigate = useNavigate() 

    // const profileData = {
    //   avatar: '/placeholder.svg?height=96&width=96',
    //   username: 'johndoe',
    //   name: 'John Doe',
    //   bio: 'Full-stack developer passionate about creating intuitive and efficient web applications.',
    //   followers: 100,
    //   following: 50,
    //   email: 'johndoe@me.com',
    //   html_url: 'https://github.com/johndoe',
    //   location: 'New York, USA',
    //   public_gists: 10,
    //   public_repos: 50,
    //   twitter_username: '@johndoe',
    //   login: 'johndoe'
    // }
  return (
   <div>
    <div className="w-full max-w-2xl bg-gray-900 text-gray-100 rounded-lg shadow-lg overflow-hidden ">
     <div className="p-6">
      <div className="flex flex-row gap-4 items-center mb-6">
       <div className="w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden">
        <img
         src={profileData?.avatar_url}  
         alt="User's avatar"
         className="w-full h-full object-cover"
        />
       </div>
       <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{profileData?.name}</h2>
        <p className="text-gray-400">{profileData?.username}</p>
       </div>
      </div>
      <div className="space-y-4">
       <p className="text-sm">
        {profileData?.bio}
       </p>
       <div className="flex gap-4 text-sm text-gray-400">
        <div className="flex items-center">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
         </svg>
         <span>{profileData?.followers} followers</span>
        </div>
        <div className="flex items-center">
         <span>{profileData?.following} following</span>
        </div>
       </div>
       <div className="flex items-center gap-2 text-sm text-gray-400">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-4 h-4"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        >
         <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
         <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
        <span>{profileData?.public_repos} repositories</span>
       </div>
       <div className="flex items-center gap-2 text-sm text-gray-400">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-4 h-4"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        >
         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
         <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{profileData?.location || 'Unknown'}</span>
       </div>
       <div className="flex items-center gap-2 text-sm text-gray-400">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-4 h-4"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
        >
         <circle cx="12" cy="12" r="10" />
         <line x1="2" y1="12" x2="22" y2="12" />
         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <a href={profileData?.html_url} className="text-blue-400 hover:underline">
         {profileData?.html_url}
        </a>
       </div>
      </div>
     </div>
     <div className="px-6 py-4 bg-gray-800 flex justify-between">
      <button className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors">
       Follow
      </button>
      <button className="px-4 py-2 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors flex items-center">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
       </svg>
       View on GitHub
      </button>
     </div>
    </div>
   </div>
  );
}

export default ProfileInfo
