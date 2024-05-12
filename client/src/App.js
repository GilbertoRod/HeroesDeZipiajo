import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect, useContext } from "react";
import Navbar from './components/Navbar'
import Login from "./pages/Login";
import { authorization } from "./context/AuthContext";


function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();
  const path = location.pathname; //extracts the current path of the user into a string assigned to the path variable
  const { authorizedUser } = useContext(authorization);
  console.log(authorizedUser);


  return (
    <React.Fragment>
      <Navbar activePage={path}/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donations' element={<Donations authorizedUser={null} />} />
        <Route path="/donations/admin" element={authorizedUser ? <Donations authorizedUser={authorizedUser}/> : <Navigate to='/donations'/>}/>

        <Route path='/admin' element={<Login/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
