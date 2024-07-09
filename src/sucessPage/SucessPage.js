import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sucessPage.css'

function SuccessPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="success-page-container">
      <h1>Registro Exitoso</h1>
      <p>Tu registro ha sido completado con éxito.</p>
      <button onClick={goToHome}>Ir al Menú</button>
    </div>
  );
}

export default SuccessPage;
