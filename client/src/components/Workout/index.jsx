import { Link } from "react-router-dom";

//import workout model
//

const Workout = () => {

    return (

        <div className="">
            <div className="title">
                <h2>____'s Workouts</h2>
            </div>
            <Link to={`/workouts/${_id}`}>
                <p></p>
            </Link>
        </div>
    )
}

export default Workout