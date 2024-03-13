import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations'; // importing the mutations
import { useNavigate } from 'react-router-dom';


const styles = {
  card: {
   
    
    padding: '50px',
    maxWidth: '800px',
    margin: 'auto',
    background: '#ffffff',
    border: '5px solid #e0e0e0',
    
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '10 10px 80px rgba(10, 10, 10, 10.1)',
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

const Auth = ({ isLogin }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // mutations from files
  const [loginMutation] = useMutation(LOGIN_USER);
  const [signupMutation] = useMutation(ADD_USER);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginMutation({ variables: { email, password } });
      localStorage.setItem('token', data.login.token);
      navigate('/Home');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signupMutation({ variables: { email, username, password } });
      localStorage.setItem('token', data.addUser.token);
      navigate('/Home');
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };


  return (
    <div style={{display:'flex', marginTop: '50px', marginRight: '10px', }}>
      <div style={{ ...styles.card, background: '#DBD3D9', borderColor: '#978E94', width: '400px', height: '500px', }} >
        <br></br>
        <h2 style={{
          fontSize: '50px',
          marginBottom: '20px',
          color: 'navy',
          marginLeft: '50px'
          }}>Log In</h2>

        <form onSubmit={handleLoginSubmit}>
          <input style={{
            fontSize: '25px',
            marginBottom: '20px',
            color: 'navy',
            width: '300px',
            height: '25px',
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
            height: '80px',
            marginLeft: '50px'

          }}
            type="submit">Log In</button>
        </form>
      </div>
      
      <div style={{ ...styles.card, background: '#DBD3D9', borderColor: '#978E94', width: '400px', height: '500px' , marginLeft: '0px', }} >
        <h2 style={{
          fontSize: '50px',
          marginBottom: '20px',
          color: 'navy',
          marginLeft: '50px'
        }} >
          Sign Up</h2>
        <form  onSubmit={handleSignupSubmit}>
          <input
            style={{
              fontSize: '25px',
              marginBottom: '20px',
              color: 'navy',
              width: '300px',
              height: '25px',
              


            }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{
              fontSize: '25px',
              marginBottom: '20px',
              color: 'navy',
              width: '300px',
              height: '25px'


            }}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{
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
            height: '80px',
            marginLeft: '50px'

          }}type="submit">Sign Up</button>
        </form>
      </div>
    </div>

  )
};



export default Auth;
