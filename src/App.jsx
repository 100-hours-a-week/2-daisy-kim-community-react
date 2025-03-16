import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import PostList from "./pages/post/PostList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/postList" element={<PostList />} />
      </Routes>
    </>
  );
}

export default App;
