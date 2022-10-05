/* IMPORT DEPENDENCIES */
import { useState } from "react";

/* IMPORT STYLING */
import "./ExerciseCards.css";

export default function ExerciseCards({ exercise, likeExercise }){

    const [showInfo, setShowInfo] = useState(false);

    const toggleClass = () => {
        setShowInfo(!showInfo);
    };

    return(
        <div class={"exercise-card"}>
            <h1 className="exercise-card-name">{exercise.name}</h1>
            <img className="exercise-card-image" src={exercise.image} alt="an exercise" />
            <div className="exercise-card-sr-info">
                <h3>Level: {exercise.intensity}</h3>
                <span className="exercise-card-sr-span"></span>
                {exercise.seconds ? <h3>Seconds: {exercise.seconds}</h3> : <h3>Sets: {exercise.sets} | Reps: {exercise.reps}</h3>}
            </div>
            <div className="exercise-card-btns-container">
                {exercise.liked ? <button className="exercise-card-btn" onClick={() => likeExercise(exercise.id, false)}>💖</button> : <button className="exercise-card-btn" onClick={() => likeExercise(exercise.id, true)}>❤</button>}
                <button className="exercise-card-btn">+</button>
                <span className="exercise-card-btn-span"></span>
                <button className="exercise-card-btn" onClick={toggleClass}>
                    {showInfo ? <span className="exercise-card-caret">&#9650;</span> : <span className="exercise-card-caret">&#9660;</span>}
                </button>
            </div>
            <div class={showInfo ? "container active" : "container"}>
                <div class="content">
                    <p className="exercise-card-accord-content"><b>Muscle Group:</b> {exercise.muscle_group}</p>
                    <p className="exercise-card-accord-content"><b>Form:</b> {exercise.form}</p>
                    <p className="exercise-card-accord-content"><b>Description:</b> {exercise.description}</p>
                </div>
            </div>
        </div>
    )
};

