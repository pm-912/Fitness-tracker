import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';
import Workout from '../components/Workout';

const WorkoutCard = () => {
  const { _id } = useParams();
  // console.log(_id);
  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, { variables: { id: _id } });

  // console.log(data)
  const singleWorkout = data?.singleWorkout || {}
  console.log(singleWorkout)

  // const { title, user, type, duration, description } = workout;
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(singleWorkout.comments || []);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <div className="workout-card-container" 
      style={{

      }}>
        
        <div className="workout-card" 
        style={{ 
          border: '5px solid #ccc', 
          padding: '10px', 
          borderRadius: '5px', 
          margin: '20px 200px 20px 20px',
          backgroundColor: 'darkgray',        
          display: 'grid',
          gridTemplateColumns: 'repeat(3, .5fr)',
          gridTemplateRows: 'repeat(3, .5fr)',
          position: 'relative'
          }}>
          <div>
            <h3 style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
            }}>{singleWorkout.title}</h3>
          </div>

          <div
          style={{
            gridColumnStart: '1',
            gridRowStart: '2',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Workout workout={data} />
          </div>

          <div 
          style={{
            gridColumnStart: '2',
            gridColumnEnd: '4',
            gridRowStart: '1',
            gridRowEnd: '3',
            position: 'relative',
            top: '40px',

          }}>
            <p> {singleWorkout.workoutUser?.username}</p>
            <p>{singleWorkout.type}</p>
            <p>Duration: {singleWorkout.duration}</p>
            <p>Details: <br></br><br></br> {singleWorkout.details}</p>
          </div>
        </div>
      </div>

      <div className="comments-section" 
      style={{ 
        border: '1px solid #ccc', 
        padding: '10px', 
        borderRadius: '5px',
        margin: '30px 500px 10px 60px',
        boxShadow: '10px 5px 5px red'
        }}>
          <div className="add-comment-container" 
          style={{ 
            marginBottom: '10px' 
            }}>
            <textarea
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>Add Comment</button>
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
