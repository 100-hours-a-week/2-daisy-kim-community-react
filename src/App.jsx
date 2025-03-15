import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./components/common/Header";
import SignUp from "./pages/signup/Signup";
import PostList from "./pages/post/PostList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postList" element={<PostList />} />
      </Routes>
    </>
  );
}

export default App;
