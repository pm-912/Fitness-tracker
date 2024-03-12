import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'

import App from './App.jsx';
import Home from './pages/Home';
import LoginSignup from './pages/Login-Signup';
import Logout from './pages/Logout';
import SingleWorkout from './pages/Single-Workout';
// import UserWorkout from 'pages/UserWorkout';
import WorkoutForm from './pages/WorkoutForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <h1>No Match</h1>,//<NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/loginsignup',
        element: <LoginSignup />
      }, {
        path: '/logout',
        element: <Logout />
      }, {
        path: '/singleworkout/:_id',
        element: <SingleWorkout />
      }, {
        path: '/userworkout',
        element: <h1>not implemented</h1>//<UserWorkout />
      },{
        path: '/workoutform',
        element: <WorkoutForm />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
