import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import { useEffect } from "react";
import { useTelegram } from "./utils/hooks/useTelegram.js";

function App() {

  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App
