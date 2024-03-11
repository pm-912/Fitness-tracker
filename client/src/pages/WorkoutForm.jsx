import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

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
            // user submission 
            console.log('Posting workout:', { title, type, duration, description });
            navigate('/UserWorkout'); // redirects to user workouts
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{
            border: '10px solid #dcdcdc',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '25 0 10px rgba(25, 25, 25, 25.1)',
            backgroundColor: '#DBD3D9',
            borderBlockColor: '#B9E8EF',
            width: '600px',
            height: '500px',
            borderColor: '#B9E8EF'

        }}>

            <h2 style={{
                fontSize: '50px',
                marginBottom: '20px',
                color: 'navy',
            }}>Add New Workout</h2>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className="workout-box" style={{
                    marginBottom: '20px',
                    border: '40px'
                }}>
                    <input style={{
                        fontSize: '25px',
                        marginBottom: '20px',
                        color: 'navy',
                        width: '350px',

                    }}
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>

                    <select style={{
                        fontSize: '25px',
                        marginBottom: '20px',
                        color: 'navy',
                        width: '350px',

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
                        fontSize: '25px',
                        marginBottom: '20px',
                        color: 'navy',
                        width: '350px',
                    }}
                        value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select Duration</option>
                        {generateDurationOptions()}
                    </select>
                    <br></br>


                    <textarea style={{
                        fontSize: '25px',
                        marginBottom: '20px',
                        color: 'navy',
                        width: '500px',
                        height: '50px',
                    }}
                        placeholder="Description" // text box for description.
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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