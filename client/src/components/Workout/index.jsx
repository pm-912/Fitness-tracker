import { Link } from "react-router-dom";


function Workout({ workout }) {
    return (
        <div className="">
            
                <Link to={`/SingleWorkout`} key={workout._id} workout={workout}>
                    <div>
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