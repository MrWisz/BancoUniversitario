import React from 'react';
import { Navigate } from 'react-router-dom';
import { getJWT } from '../utils/localStorage'; // Importa la función getJWT

const ProtectedRoute = ({ children }) => {
  const token = getJWT();

  if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio
    return <Navigate to="/" />;
  }

  // Si hay token, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;