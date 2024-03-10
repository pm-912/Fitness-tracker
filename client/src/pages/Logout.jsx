import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');// clear token, and local storage
    navigate('/login'); // redirect to login
  }, [history]);

  return (
    <div>
      <h2>Losing gainz, Logging out</h2>
    </div>
  );
};

export default Logout;
