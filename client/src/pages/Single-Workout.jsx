import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_WORKOUT } from '../utils/queries';
import sport from '../assets/icons/sport.png'
import cardio from '../assets/icons/treadmill.png'
import lifting from '../assets/icons/training.png'
import yoga from '../assets/icons/buddhist-yoga-pose.png'
import Workout from '../components/Workout';

const WorkoutCard = () => {
  const { _id } = useParams();
  // console.log(_id);
  const { loading, data } = useQuery(QUERY_SINGLE_WORKOUT, { variables: { id: _id } });


  // console.log(data)
  const singleWorkout = data?.singleWorkout || {}
  console.log(singleWorkout)

  const chooseImage =() => {
    switch(singleWorkout.type){
        case  "Aerobic":
            return sport
        case "Cardio":
            return cardio
        case "Lifting":
            return lifting
        case "Yoga":
            return yoga

        default: 
            return sport //maybe replace with loading or unavailable img as back up
    }
};
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
          border: '7px solid #ccc', 
          padding: '0px', 
          borderRadius: '5px', 
          margin: '50px 300px 50px 300px',
          backgroundColor: 'darkgray',        
          display: 'grid',
          gridTemplateColumns: 'repeat(3, .5fr)',
          gridTemplateRows: 'repeat(3, .5fr)',
          position: 'relative',
          boxShadow: '15px 15px 15px #8664B6'
          }}>
          <div>
            <h2 style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
            }}>{singleWorkout.title}</h2>
          </div>

          <div
          style={{
            gridColumnStart: '1',
            gridRowStart: '2',
            display: 'flex',
            justifyContent: 'center',
          }}>
            {/* <Workout workout={singleWorkout} /> */}
            <img src={chooseImage()} style={{height: '150px'}}/>
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
            <h4> {singleWorkout.workoutUser?.username}</h4>
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
        boxShadow: '10px 5px 5px #8664B6',
        marginLeft: '350px',
        width: '700px',
        }}>
          <div className="add-comment-container" 
          style={{ 
            marginBottom: '10px' 
            }}>
            <textarea style={{height: '50px', width: '675px'}}
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            
            <button style={{height: '50px', width: '150px', marginLeft: '265px', backgroundColor: 'green', color: 'white'}}onClick={handleCommentSubmit}>Add Comment</button>
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
