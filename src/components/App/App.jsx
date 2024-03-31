import '../App/App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import LoginPage from "../../pages/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage.jsx";

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
