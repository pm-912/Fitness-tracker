import { useQuery } from '@apollo/client';
import Workout from '../components/Workout';
import { QUERY_ALL_WORKOUTS } from '../utils/queries';
import { useState } from 'react';

const Home = () => {
    // const [workouts, setWorkouts] = useStat  e([])
    const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
    const workouts = data?.allWorkouts || []


    console.log(workouts)
    // console.log(workouts)
    return (
        <main>
            <h2
                style={{ 
                    color: 'navy', 
                    fontSize: '25px', 
                    margin: '0 auto',  
                    }}>
                Community Workouts</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div
                    style={{ display: 'flex', flexWrap: 'wrap', 
                    justifyContent: 'space-between', boxShadow: '0 4px 10px rgba(10, 10, 10, 0.1)',
                    }}>
                    {workouts && workouts.map((workout) => (
                        <div key={workout._id} className="card" style={{
                            border: '3px solid #ccc',
                            padding: '10px', margin: '20px', borderRadius: '15px',
                            width: '30%',
                            borderColor: '#978E94',
                            backgroundColor: '#DBD3D9',
                            boxShadow: '20px'
                           
                            
                        }}>
                            <Workout workout={workout} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;
