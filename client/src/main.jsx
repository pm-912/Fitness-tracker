import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'

import App from './App.jsx';
import Home from './pages/Home';
import LoginSignup from './pages/Login-Signup';
import Logout from './pages/Logout';
import SingleWorkout from './pages/SingleWorkout';
import UserWorkout from './pages/UserWorkout';
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
        path: '/LoginSignup',
        element: <LoginSignup />
      }, {
        path: '/Logout',
        element: <Logout />
      }, {
        path: '/SingleWorkout/:Workoutid',
        element: <SingleWorkout />
      }, {
        path: '/UserWorkout',
        element: <UserWorkout />
      },{
        path: '/WorkoutForm',
        element: <WorkoutForm />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  )
