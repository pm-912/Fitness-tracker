import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations'; // importing the mutations
import { useNavigate } from 'react-router-dom';

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
   <div style={{...styles.card, background:'lightgray', borderColor: '#B9E8EF', width: '300px', height: '500px', borderBlockStartColor: '#B9E8EF', }} >
   <br></br>
      <h2 style={{
                fontSize: '50px',
                marginBottom: '20px',
                color: 'navy',
           

            }}>Log In</h2>
      <form onSubmit={handleLoginSubmit}>
        <input style={{
          // width: '100%',
          // padding: '10px',
          // margin: '8px 0',
          // fontSize: '25px',
          // borderRadius: '25px',
          // border: '15px solid #ccc',
          // boxSizing: 'border-box',
          // borderBlockColor: 'navy'
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
          // width: '100%',
          // padding: '10px',
          // margin: '8px 0',
          // fontSize: '25px',
          // borderRadius: '25px',
          // border: '15px solid #ccc',
          // boxSizing: 'border-box',
          // borderBlockColor: 'navy'
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
            type="submit">Log In</button>
      </form>
    </div>

)
};
<div style={{...styles.card, background:'lightgray', borderColor: '#B9E8EF', width: '300px', height: '500px', borderBlockStartColor: '#B9E8EF', }} >
        <h2 style={{
                fontSize: '50px',
                marginBottom: '20px',
                color: 'navy',
              }} >
          Sign Up</h2>
        <form style={styles.form} onSubmit={handleSignupSubmit}>
          <input
            style={{
              // width: '100%',
              // padding: '10px',
              // margin: '8px 0',
              // fontSize: '25px',
              // borderRadius: '25px',
              // border: '15px solid #ccc',
              // boxSizing: 'border-box',
              // borderBlockColor: 'navy'
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
          <input
            style={{
              // width: '100%',
              // padding: '10px',
              // margin: '8px 0',
              // fontSize: '25px',
              // borderRadius: '25px',
              // border: '15px solid #ccc',
              // boxSizing: 'border-box',
              // borderBlockColor: 'navy'
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
              // width: '100%',
              // padding: '10px',
              // margin: '8px 0',
              // fontSize: '25px',
              // borderRadius: '25px',
              // border: '15px solid #ccc',
              // boxSizing: 'border-box',
              // borderBlockColor: 'navy'
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
          <button style={styles.button} type="submit">Sign Up</button>
        </form>
      </div>

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
