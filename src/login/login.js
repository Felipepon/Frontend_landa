import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('login/', {
      username: formData.username,
      password: formData.password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      axiosInstance.defaults.headers['Authorization'] = `Token ${response.data.token}`;
      navigate('/welcome');  // Redirigir a la página de bienvenida
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de Usuario:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
