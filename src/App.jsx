import { Routes, Route } from "react-router-dom";
import Header from "@components/common/Header";
import Login from "@pages/auth/Login";
import Signup from "@pages/auth/Signup";
import PostList from "@pages/post/PostList.jsx";
import { Toaster } from "react-hot-toast";
import PostDetail from "@pages/post/PostDetail.jsx";
import PostEdit from "@pages/post/PostEdit";

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
        <Route path="/postedit" element={<PostEdit />} />
      </Routes>
    </>
  );
}

export default App;
