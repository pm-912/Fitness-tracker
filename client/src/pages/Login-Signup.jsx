import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client'; 
//mutations
const LOGIN_MUTATION = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      token
    }
  }
`;

const Auth = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // mutations
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const [signupMutation] = useMutation(SIGNUP_MUTATION);

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
          variables: { email, password }
        });
        localStorage.setItem('token', data.signup.token);
      }
      navigate('/WorkoutForm'); // redirects to workoutform

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
