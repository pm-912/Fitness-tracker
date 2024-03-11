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
            border: '1px solid #dcdcdc',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '25 0 10px rgba(25, 25, 25, 25.1)',
            backgroundColor: 'lightgray',
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
                        // border: '15px solid #ccc',
                        // borderBlockColor: 'navy',
                        // borderRadius: '25PX'

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
                        // border: '15px solid #ccc',
                        // // borderBlockColor: 'navy',
                        // borderRadius: '25px'
                        // fontSize: '25px',
                        // width: '400px',
                        // marginBottom: '25px'

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
                        // border: '15px solid #ccc',
                        // borderBlockColor: 'navy',
                        // borderRadius: '25PX'
                        // fontSize: '25px',
                        // marginBottom: '20px',
                        // color: 'grey',
                        // width: '400px'
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
                
                        
                        // border: '15px solid #ccc',
                        // borderBlockColor: 'navy',
                        height: '50px',
                        // borderRadius: '25px'


                        //    marginBottom: '5px',
                        //    padding: '5px',
                        //    fontSize: '16px',
                        //    border: '5px solid #dcdcdc',
                        //    borderRadius: '5px',
                        //    backgroundColor: '#f8f8f8',
                        //    color: '#333333',

                        //    boxSizing: 'border-box',
                        //    resize: 'vertical',
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
const styles = {
    input: {
        marginBottom: '15px',
        padding: '15px',
        fontSize: '16px',
        border: '1px solid #dcdcdc',
        borderRadius: '5px',
        backgroundColor: '#f8f8f8',
        color: '#333333',
        width: '100%',
        boxSizing: 'border-box',
    },
    select: {
        marginBottom: '25px',
        padding: '15px',
        fontSize: '25px',
        border: '1px solid #dcdcdc',
        borderRadius: '5px',
        backgroundColor: '#f8f8f8',
        color: '#333333',
        width: '100%',
        boxSizing: 'border-box',
    },
    textarea: {
        marginBottom: '5px',
        padding: '5px',
        fontSize: '16px',
        border: '5px solid #dcdcdc',
        borderRadius: '5px',
        backgroundColor: '#f8f8f8',
        color: '#333333',
        width: '100%',
        boxSizing: 'border-box',
        resize: 'vertical',
    },
    button: {
        padding: '15px',
        fontSize: '18px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    card: {
        border: '1px solid #dcdcdc',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
        fontSize: '20px',
        marginBottom: '10px',
        color: '#333333',
    },
    cardText: {
        fontSize: '40px',
        marginBottom: '8px',
        color: '#555555',
    },
};

export default WorkoutForm;