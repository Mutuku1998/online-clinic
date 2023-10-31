import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);
  const isAllowed = allowedRoles.includes(role);

  return token && isAllowed ? children : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoutes;
