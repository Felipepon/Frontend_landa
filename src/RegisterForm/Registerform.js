import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
      nombre: '',
      edad: '',
      genero: '',
      cc: '',
      telefono: '',
    });
  
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitting:', formData); 
      const dataToSubmit = {
        user: {
          username: formData.username,
          password: formData.password,
          email: formData.email,
        },
        nombre: formData.nombre,
        edad: formData.edad,
        genero: formData.genero,
        cc: formData.cc,
        telefono: formData.telefono,
      };
      axiosInstance.post('register/', dataToSubmit)
        .then((response) => {
          console.log(response.data);
          navigate('/success');
        })
        .catch((error) => {
          console.error('Error response:', error.response); // Verifica el error detallado
          if (error.response && error.response.status === 400) {
            setNotification('Usuario ya registrado');
          } else {
            setNotification('Error al registrar usuario');
          }
        });
    };
  
    const handleBackToHome = () => {
      navigate('/');
    };
  
    return (
      <div className="registration-form-container">
        <div className="form-header">
          <h1>Registrarse</h1>
          <button className="back-button" onClick={handleBackToHome}>Regresar al Inicio</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de Usuario:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            Correo Electrónico:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Edad:
            <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
          </label>
          <label>
            Género:
            <select name="genero" value={formData.genero} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
          </label>
          <label>
            Cédula de Ciudadanía:
            <input type="text" name="cc" value={formData.cc} onChange={handleChange} required />
          </label>
          <label>
            Teléfono:
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </label>
          <button type="submit">Registrar</button>
        </form>
        {notification && <div className="notification">{notification}</div>}
      </div>
    );
  }
  
  export default RegistrationForm;