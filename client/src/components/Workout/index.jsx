import { Link } from "react-router-dom";
import sport from '../../assets/icons/sport.png'
import cardio from '../../assets/icons/treadmill.png'
import lifting from '../../assets/icons/training.png'



function Workout({ workout }) {
    const chooseImage =() => {
        switch(workout.type){
            case  "Aerobic":
                return sport
            case "Cardio":
                return cardio
            case "Lifting":
                return lifting
           
          

            default: 
                return sport //maybe replace with loading or unavailable img as back up
        }
    }
    return (
        <div className="">
            {console.log(workout)}
                <Link to={{
                    pathname: `/singleworkout/${workout._id}`, 
                    state: { workout: workout }}
                    } key={workout._id} >
                    <div>
                    <img src={chooseImage()} style={{height: '40px'}}/>

                        <h3>User</h3>
                        <p>{workout.title}</p>
                        <p>{workout.type}</p>
                        <p>{workout.createdAt}</p>
                    </div>
                </Link>
            
        </div>
    )
}

export default Workout