import { Route, Routes } from "react-router-dom";

import Sidebar from "./Components/Sidebar";

import ExplorePage from "./Pages/ExplorePage";
import HomePage from "./Pages/HomePage";
import LikesPage from "./Pages/LikesPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
 return (
  <>
   <div className="flex">
    <Sidebar />
    <div className="w-full h-screen max-w-5xl text-white mx-auto transition-all duration-300 flex-1 items-center justify-center">
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/likes" element={<LikesPage />} />
     </Routes>
    </div>
   </div>
  </>
 );
}

export default App;
