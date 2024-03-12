import { Link } from "react-router-dom";


function Workout({ workout }) {
    return (
        <div className="">
            
                <Link to={{
                    pathname: `/singleworkout/`, 
                    state: { workout: workout }}
                    } key={workout._id}>
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