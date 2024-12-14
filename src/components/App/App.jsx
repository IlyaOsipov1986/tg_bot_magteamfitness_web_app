import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";

function App() {

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
