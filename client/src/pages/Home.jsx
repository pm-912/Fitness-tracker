import { useQuery } from '@apollo/client';
import Workout from '../components/Workout'
import { QUERY_ALL_WORKOUTS } from '../utils/queries'
import { useState } from 'react';



const Home = () => {
    // const [workouts, setWorkouts] = useState([])
    const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
    const workouts = data?.allWorkouts || []
    console.log(workouts)
    return (
        <main>
            <h2 style={{color: 'navy', fontSize: '25px'}}>Community Workouts</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                workouts && workouts.map((workout) => (
                    
                <div key={workout._id} className="card" style={{ border: '5px solid #ccc', padding: '10px', margin: '20px', borderRadius: '5px', justifyContent: 'space-between', width: '500px', flexDirection: 'column', borderColor: '#B9E8EF'}} >
                    <Workout key={workout._id} workout={workout} />
                </div>)
                ))}
        </main>
    );
};

export default Home;
