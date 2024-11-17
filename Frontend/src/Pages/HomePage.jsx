import React from 'react'
import Search from '../Components/Search'
import ProfileInfo from '../Components/ProfileInfo'
import SortRepos from '../Components/SortRepos'
import Repos from '../Components/Repos'

const HomePage = () => {
  return (
   <div className="m-4">
    <Search />
    <SortRepos />
    <div className='flex gap-4 flex-col sm:flex-row lg-flex-row justify-center items-start'>
     <ProfileInfo />
     <Repos/>
    </div>
   </div>
  );
}

export default HomePage
