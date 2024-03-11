import { Link } from "react-router-dom";
import { useState } from "react";


function Workout({ workout }) {
    return (

        <div className="">
            <Link to={`/workouts/${workout._id}`}>
                <div>
                    <h3>User</h3>
                    <p>{workout.title}</p>
                    <p>{workout.type}</p>
                    <p>{workout.date}</p>
                </div>
            </Link>
        </div>
    )
}

export default Workout