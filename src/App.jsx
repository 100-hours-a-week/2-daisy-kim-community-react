import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
