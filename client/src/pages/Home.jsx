import { useQuery } from '@apollo/client';
import { Workout } from '../components/Workout'
import { ALL_WORKOUTS } from '../utils/queries'


const Home = () => {
    const [workouts, setWorkouts] = useState([])

    return (
        <main>
            <h2>Community Workouts</h2>
            <div className="container">
                {workouts.map((workout) =>
                    <Workout workout={workout} />
                )}
            </div>
        </main>
    );
};

export default Home;