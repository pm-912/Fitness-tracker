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
                style={{ color: 'navy', fontSize: '25px', marginLeft: '600px', textDecoration: 'none'}}>
                Community Workouts</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 10px rgba(10, 10, 10, 0.1)',
                        borderRadius: '10px', // Rounded corners for a softer look
                        padding: '20px', // Padding for spacing around content
                        backgroundColor: 'white', // Light background color
                        width: '100%',
                        boxSizing: 'border-box',
                        marginBottom: '20px',
                        textDecoration: 'none'
                    }}>
                    {workouts && workouts.map((workout) => (
                        <div key={workout._id} className="card" style={{
                            border: '2px solid #ccc',
                            borderRadius: '15px',
                            padding: '20px',
                            margin: '20px',
                            width: 'calc(30% - 40px)', // Adjusted width to consider padding and margin
                            backgroundColor: '#DBD3D9',
                            boxShadow: '10 4px 8px rgba(10, 10, 10, 10.1)',
                            boxSizing: 'border-box', // Ensure padding and border are included in the width calculation
                            transition: 'transform 0.3s ease', // Added transition effect for smooth hover
                            cursor: 'pointer',
                            textDecoration: 'none'


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
