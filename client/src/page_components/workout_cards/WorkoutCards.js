/* IMPORT STYLING */
import "./WorkoutCards.css";

export default function WorkoutCards({ workout }){

    return(
        <div id="workout-card">
            <img id="workout-card-image" src={workout.image} alt="a workout" />
            <div id="workout-card-info-container">
                <h4><b>{workout.name}</b></h4>
                <p>{workout.description}</p>
            </div>
        </div>
    )
};