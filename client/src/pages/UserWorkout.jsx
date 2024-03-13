import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

const UserWorkout = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const myWorkouts = data?.me || []
  console.log(myWorkouts);
  // const { _id, title, user, type, duration } = workout;
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    navigate(`/edit-workout/${id}`); // redirect to workout form
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        boxShadow: '0 4px 10px rgba(10, 10, 10, 0.1)',
        borderRadius: '10px', // Rounded corners for a softer look
        padding: '20px', // Padding for spacing around content
        backgroundColor: 'white', // Light background color
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '20px',
      }}
    >
      {myWorkouts.workouts && myWorkouts.workouts.map((workout) => (
        <div className="workout-card"
          style={{
            border: '2px solid #ccc',
            borderRadius: '15px',
            padding: '20px',
            margin: '20px',
            width: 'calc(30% - 40px)', // Adjusted width to consider padding and margin
            backgroundColor: '#DBD3D9',
            boxShadow: '10 4px 8px rgba(10, 10, 10, 10.1)',
            boxSizing: 'border-box', // Ensure padding and border are included in the width calculation
            transition: 'transform 0.3s ease', // Added transition effect for smooth hover
            cursor: 'pointer',
          }}
        >
          <h3>{workout.title}</h3>
          <p>Workout Type: {workout.type}</p>
          <p>Duration: {workout.duration} minutes</p>
          <p>Date added: {workout.createdAt}</p>
          <button onClick={handleDelete}>Delete Workout</button>
          <button onClick={handleUpdate}>Update Workout</button>
        </div>
      ))}
    </div>)
};

export default UserWorkout;
