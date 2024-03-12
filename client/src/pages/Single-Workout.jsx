import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';

const WorkoutCard = () => {
  const { _id } = useParams();
  // console.log(_id);
  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, {variables: { id: _id }});
  // console.log(data)
  const singleWorkout = data?.singleWorkout || {}
  console.log(singleWorkout)

  // const { title, user, type, duration, description } = workout;
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      onCommentAdd(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="workout-card-container">
      <div className="workout-card">
        <h3>{singleWorkout.title}</h3>
        <p>User: {singleWorkout.workoutUser?.username}</p>
        <p>Type: {singleWorkout.type}</p>
        <p>Duration: {singleWorkout.duration} minutes</p>
        <p>Details: {singleWorkout.details}</p>
      </div>

      <div className="comments-section">
        <div className="add-comment-container">
          <textarea
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Share Comment</button>
        </div>

        <div className="posted-comments-container">
          {singleWorkout.comments?.map((comment, index) => (
            <div className="comment-box" key={index}>
              <p>{comment}</p>
              <button onClick={() => onCommentDelete(index)}>Delete Comment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
