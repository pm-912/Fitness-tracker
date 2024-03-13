import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../utils/mutations';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [details, setDetails] = useState('');

    const navigate = useNavigate();
    const [addWorkout, { error, loading }] = useMutation(ADD_WORKOUT);

    if (loading) return "loading..."
    if (error) console.log(error)
    // 30 min interval for duration
    const generateDurationOptions = () => {
        const options = [];
        for (let i = 30; i <= 240; i += 30) { // range of interval
            options.push(<option key={i} value={i}>{i} minutes</option>);// to show in 30 min intervals
        }
        return options;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            addWorkout({
                variables: {
                    input: {

                        title: title, type: type, duration: duration, details: details
                    }
        }})
            console.log('Posting workout:', { title, type, duration, details });
            navigate('/UserWorkout'); // redirects to user workouts
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{
            border: '5px solid #dcdcdc',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '10px 5px 5px #8664B6', // Corrected boxShadow property
            backgroundColor: '#DBD3D9',
            width: '800px',
            height: '600px',
            borderColor: '#978E94',
            marginLeft: 'auto', // Align to the center horizontally
            marginRight: 'auto', // Align to the center horizontally
            marginTop: '50px',
        }}>
            <h2 style={{
                fontSize: '50px',
                marginBottom: '20px',
                color: 'navy',
                marginLeft: '150px'
            }}>Add New Workout</h2>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className="workout-box" style={{
                    marginBottom: '20px',
                    border: '40px',
                    color: 'black'
                }}>
                    <input style={{
                        fontSize: '15px',
                        marginBottom: '20px',
                        color: 'gray',
                        width: '350px',
                        marginLeft: '200px',
                        height: '40px'
                    }}
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>

                    <select style={{
                        fontSize: '15px',
                        marginBottom: '20px',
                        color: 'black',
                        width: '350px',
                        marginLeft: '200px',
                        height: '40px'

                    }}
                        value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" >Select Type</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="H.I.I.T.">H.I.I.T.</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Pilates">Pilates</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Dance">Dance</option>
                        <option value="Aerobic">Aerobic</option>
                    </select>
                    <br></br>

                    <select style={{
                        fontSize: '15px',
                        marginBottom: '20px',
                        color: 'black',
                        width: '350px',
                        marginLeft: '200px',
                        height: '40px'
                    }}
                        value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select Duration</option>
                        {generateDurationOptions()}
                    </select>
                    <br></br>


                    <textarea style={{
                        fontSize: '15px',
                        marginBottom: '20px',
                        color: 'black',
                        width: '500px',
                        height: '50px',
                        marginLeft: '125px'
                    }}
                        placeholder="Details" // text box for description.
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
                <br></br>

                <button style={{
                    padding: '15px',
                    fontSize: '18px',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    height: '50px',
                    width: '400px',
                    display: 'block',
                    margin: 'auto',


                }} type="submit">Post Workout</button>
            </form>

        </div>

    );
};


export default WorkoutForm;