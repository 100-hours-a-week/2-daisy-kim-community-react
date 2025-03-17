import { Routes, Route } from "react-router-dom";
import Header from "@components/common/Header";
import Login from "@pages/auth/Login";
import Signup from "@pages/auth/Signup";
import PostList from "@pages/post/PostList.jsx";
import { Toaster } from "react-hot-toast";
import PostDetail from "@pages/post/PostDetail.jsx";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/postdetail" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
