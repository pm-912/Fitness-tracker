import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('token');// clear token, and local storage
    history.push('/login'); // redirect to login
  }, [history]);

  return (
    <div>
      <h2>Losing gainz, Logging out</h2>
    </div>
  );
};

export default Logout;
