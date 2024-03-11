import { Link } from "react-router-dom";


function Workout({workouts}) {
    return (
        <div className="">
            {workouts && workouts.map((workout) => (
                <Link to={`/workouts/${workout._id}`}>
                    <div>
                        <h3>User</h3>
                        <p>{workout.title}</p>
                        <p>{workout.type}</p>
                        <p>{workout.createdAt}</p>
                    </div>
                </Link>
            )
            )}
        </div>
    )
}

export default Workout