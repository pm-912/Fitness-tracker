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
    <div style={{ ...styles.card, background: 'lightgray', border: '10px solid #dcdcdc', borderColor: '#B9E8EF', width: '300px', height: '500px', borderBlockStartColor: '#B9E8EF', boxShadow: '10 5px 10px rgba(10, 10, 10, 10.1)', padding: '50px', }} >
      <br></br>
      <h2 style={{
        fontSize: '50px',
        marginBottom: '20px',
        color: 'navy',


      }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input style={{

          fontSize: '25px',
          marginBottom: '20px',
          color: 'navy',
          width: '300px',
          height: '25px'

        }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input style={{
         
          fontSize: '25px',
          marginBottom: '20px',
          color: 'navy',
          width: '300px',
          height: '25px'
        }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '25px 25px',
          borderRadius: '20px',
          border: '25px',
          fontSize: '25px',
          cursor: 'pointer',
          marginTop: '25px',
          width: '150px',
          height: '80px'

        }}
          type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
    </div>
  );
};
const styles = {
  card: {
    boxShadow: '1 5px 8px rgba(10, 10, 10, 10.1)',
    borderRadius: '8px',
    padding: '50px',
    maxWidth: '800px',
    margin: 'auto',
    background: '#ffffff',
    border: '20px solid #e0e0e0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '50px',
    margin: '10px 0',
    color: 'blue',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    fontSize: '25px',
    borderRadius: '25px',
    border: '25px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: 'white',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Auth;
