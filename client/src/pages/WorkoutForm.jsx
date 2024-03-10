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
        <div>
            <h2>Add New Workout</h2>
            <form onSubmit={handleSubmit}>
                <div className="workout-box">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {/*different types of workout as dropdown menu*/}
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="H.I.I.T.">H.I.I.T.</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Pilates">Pilates</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Dance">Dance</option>
                        <option value="Aerobic">Aerobic</option>
                    </select>
                    <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select Duration</option>
                        {generateDurationOptions()}
                    </select>
                    <textarea
                        placeholder="Description" // text box for description.
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Post Workout</button>
            </form>
        </div>
    );
};

export default WorkoutForm;
