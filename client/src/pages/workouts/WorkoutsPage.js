/* IMPORT DEPENDENCIES */
import { useEffect, useState } from 'react';

/* IMPORT CUSTOM COMPONENTS */
import ExerciseCards from "../../page_components/exercise_cards/ExerciseCards";

/* IMPORT STYLING */
import "./WorkoutsPage.css";

export default function WorkoutsPage(){

    const [exercises, setExercises] = useState([]);
    
    useEffect(() => {
        fetch("/exercises").then((r) => {
            if(r.ok){
                r.json().then((exercises) => setExercises(exercises))
            }
        }).catch((error) => console.log("ERROR WHEN FETCHING EXERCISES:", error))
    }, []);

    function handleLike(updateExercise) {
        const updateExercises = exercises.map((exercise) => {
          if(exercise.id === updateExercise.id) {
            return updateExercise;
          }else{
            return exercise;
          }
        });
        setExercises(updateExercises)
    };

    const exerciseCards = exercises.map((exercise) => <ExerciseCards key={exercise.id} exercise={exercise} handleLike={handleLike} />);
    
    return(
        <div id="exercise-cards-container">
            {exerciseCards}
        </div>
    )
};