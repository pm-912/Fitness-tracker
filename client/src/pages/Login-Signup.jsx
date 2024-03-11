import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from './mutations'; // importing the mutations

const Auth = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // mutations from files
  const [loginMutation] = useMutation(LOGIN_USER);
  const [signupMutation] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const { data } = await loginMutation({
          variables: { email, password }
        });
        localStorage.setItem('token', data.login.token);
      } else {
        const { data } = await signupMutation({
          variables: { email, username, password } // username
        });
        localStorage.setItem('token', data.addUser.token);
      }
      history.push('/Home'); // redirects to WorkoutForm
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isLogin && ( // username 
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Auth;
