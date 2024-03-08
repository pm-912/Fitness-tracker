import { useQuery } from '@apollo/client';
import { Workout } from '../components/Workout'
import { ALL_WORKOUTS } from '../utils/queries'


const Home = () => {
    return (
        <main>
            <div className="container">
                <Workout />
            </div>
        </main>
    );
};

export default Home;