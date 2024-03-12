import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';

const WorkoutCard = ( {props } ) => {
  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT);
  const singleWorkout = data?.singleWorkout(props._id) || {}
  console.log(singleWorkout);

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
        <h3>{title}</h3>
        <p>User: {user}</p>
        <p>Type: {type}</p>
        <p>Duration: {duration} minutes</p>
        <p>Description: {description}</p>
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
          {comments.map((comment, index) => (
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
