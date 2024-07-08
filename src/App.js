import React from 'react';
import RegisterForm from './RegisterForm/Registerform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuccessPage from './sucessPage/SucessPage';
import Login from './login/login';
import Logout from './logout/logout';
import Home from './Home/Home';
import WelcomePage from './welcomePage/welcomePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

