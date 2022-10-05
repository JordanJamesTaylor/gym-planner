/* IMPORT DEPENDENCIES */
import { useEffect, useState } from 'react';

/* IMPORT CUSTOM COMPONENTS */
import ExerciseCards from "../../page_components/exercise_cards/ExerciseCards";

/* IMPORT STYLING */
import "./WorkoutsPage.css";

export default function WorkoutsPage(){

    const [exercises, setExercises] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch("/exercises").then((r) => {
            if(r.ok){
                r.json().then((exercises) => setExercises(exercises))
            }
        }).catch((error) => console.log("ERROR WHEN FETCHING EXERCISES:", error))
    }, [refresh]);

    function likeExercise(id, update){

        fetch(`/exercises/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                liked: update,
            })
        }).then((r) => {
            if(r.ok){
                r.json().then(() => {
                    console.log("UPDATE SUCESSFUL");
                    setRefresh(!refresh);
                })
            }
        }).catch((error) => console.log("ERROR WHEN UPDATING EXERCISE LIKE STATUS: ", error));
    };

    const exerciseCards = exercises.map((exercise) => <ExerciseCards key={exercise.id} exercise={exercise} likeExercise={likeExercise} />);
    
    return(
        <div id="exercise-cards-container">
            {exerciseCards}
        </div>
    )
};