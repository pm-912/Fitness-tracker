import { useQuery } from '@apollo/client';
import { Workout } from '../components/Workout'
import { ALL_WORKOUTS } from '../utils/queries'


const Home = () => {
    const { loading, data } = useQuery(ALL_WORKOUTS);
    const workouts = data?.allWorkouts || [];
    return (
        <main>
            <div className="flex-row justify-center">
                <div
                    className="col-12 col-md-10 mb-3 p-3"
                    style={{ border: '1px dotted #1a1a1a' }}
                >
                    <ThoughtForm />
                </div>
                <div className="col-12 col-md-8 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ThoughtList
                            thoughts={thoughts}
                            title="Some Feed for Thought(s)..."
                        />
                    )}
                </div>
            </div>
        </main>

    )
}