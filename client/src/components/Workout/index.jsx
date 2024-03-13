import { Link } from "react-router-dom";
import sport from '../../assets/icons/sport.png'
import cardio from '../../assets/icons/treadmill.png'
import lifting from '../../assets/icons/training.png'
import yoga from '../../assets/icons/buddhist-yoga-pose.png'


function Workout({ workout }) {
    if (!workout) {
        return null;
    }
    console.log(workout);
    const chooseImage =() => {
        switch(workout.type){
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
    }
    
    return (
        <div style={{marginLeft: '100px',}}className="">
            {console.log(workout)}
                <Link style={{textDecoration: 'none',}}to={{
                    pathname: `/singleworkout/${workout._id}`, 
                    state: { workout: workout }}
                    } key={workout._id} >
                    <div>
                    <img src={chooseImage()} style={{height: '70px', marginLeft: '30px', boxShadow: '10px 5px 5px #8664B6'}}/>

                        <h3>{workout.workoutUser?.username}</h3>
                        <p>{workout.title}</p>
                        <p>{workout.type}</p>
                        <p>{workout.createdAt}</p>
                    </div>
                </Link>
            
        </div>
    )
}

export default Workout