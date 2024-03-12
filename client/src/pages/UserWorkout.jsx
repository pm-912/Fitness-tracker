import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { QUERY_MY_WORKOUTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const UserWorkout = () => {
  const { loading, data } = useQuery(QUERY_MY_WORKOUTS);
  const myWorkouts = data?.myWorkouts || []
  // const { _id, title, user, type, duration } = workout;
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    navigate(`/edit-workout/${id}`); // redirect to workout form
  };

  return (
    <div>
      {myWorkouts && myWorkouts.map((workout) => (
        <div className="workout-card">
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
