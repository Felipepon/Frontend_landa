import React from 'react';
import RegisterForm from './RegisterForm/Registerform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuccessPage from './sucessPage/SucessPage';
import Login from './login/login';
import Logout from './logout/logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

