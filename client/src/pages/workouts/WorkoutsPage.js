/* IMPORT DEPENDENCIES */
import { useEffect, useState } from 'react';

/* IMPORT CUSTOM COMPONENTS */
import WorkoutCards from "../../page_components/workout_cards/WorkoutCards";

/* IMPORT STYLING */
import "./WorkoutsPage.css";

export default function WorkoutsPage(){

    const [workouts, setWorkouts] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/workouts").then((r) => {
            if(r.ok){
                r.json().then((workouts) => setWorkouts(workouts))
            }
        }).catch((error) => setError(error))
    }, [])

    const workoutCards = workouts.map((workout) => <WorkoutCards key={workout.id} workout={workout} />);

    for (let i = 0; i < workoutCards.length; i += 4) {

        const row = workoutCards.slice(i, i + 4)
        console.log("Working with: ", row);
    };

    return(
        <div id="workout-cards-container">
            {workoutCards}
        </div>
    )
};