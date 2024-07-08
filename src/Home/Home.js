import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login.js';

function Home() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Bienvenido</h1>
      <Login />
      <button onClick={goToRegister}>Ir a Registro</button>
    </div>
  );
}

export default Home;
