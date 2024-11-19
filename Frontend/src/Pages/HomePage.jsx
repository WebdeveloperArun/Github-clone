import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import ProfileInfo from '../Components/ProfileInfo'
import SortRepos from '../Components/SortRepos'
import Repos from '../Components/Repos'
import toast from 'react-hot-toast'
import Spinner from '../Components/Spinner'

const HomePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");



  const getUserProfileAndRepos = async (username = "WebdeveloperArun") => {
   setLoading(true);
   try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfileData(data);

    const repoData = await fetch(data.repos_url);
    const repoDataJson = await repoData.json();
    setRepositories(repoDataJson);
    return {data, repoDataJson}
   } catch (error) {
    console.log("error in getUserProfileAndRepos :", error);
   } finally {
    setLoading(false);
   }
  };

  useEffect(()=>{
    getUserProfileAndRepos();
  },[])

  const onSearch = async (e,username, setUsername) => {
    e.preventDefault();
    setLoading(true);
   try {
    const {data, repoDataJson} = await getUserProfileAndRepos(username);
    setProfileData(data);
    setRepositories(repoDataJson);
    setUsername("");
   } catch (error) {
    console.log("error in onSearch :",error);
    toast.error("User not found");
   } finally {
    setLoading(false);
   }
  };

  console.log("profileData", profileData);
  console.log("repositories", repositories);
  

  return (
   <div className="m-4">
    <Search  onSearch={onSearch}/>
    <SortRepos />
    <div className="flex gap-4 flex-col sm:flex-row lg-flex-row justify-center items-start">
     {loading ? <Spinner /> : <ProfileInfo profileData={profileData} />}
     {loading ? <Spinner /> : <Repos repositories={repositories} />}
    </div>
   </div>
  );
}

export default HomePage
