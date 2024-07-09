import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login.js';
import './Home.css'

function Home() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <h1>Bienvenido</h1>
      {error && <div className="error-message">{error}</div>}
      <Login setError={setError} />
      <button onClick={goToRegister}>Ir a Registro</button>
    </div>
  );
}

export default Home;
