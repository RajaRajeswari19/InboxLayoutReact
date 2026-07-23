import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MainLayout from "./layout/MainLayout";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  const isLoggedIn = !sessionStorage.getItem("username");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isLoggedIn ? (<MainLayout />) : (<Navigate to="/" replace />)} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />

      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  );
}

export default App;
