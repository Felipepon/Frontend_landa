import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Registro Exitoso</h1>
      <p>Tu registro ha sido completado con éxito.</p>
      <button onClick={goToHome}>Ir al Menú</button>
    </div>
  );
}

export default SuccessPage;
