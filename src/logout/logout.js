import React from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axiosInstance.post('logout/', {}, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      localStorage.removeItem('token');
      axiosInstance.defaults.headers['Authorization'] = null;
      navigate('/');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  );
}

export default Logout;
