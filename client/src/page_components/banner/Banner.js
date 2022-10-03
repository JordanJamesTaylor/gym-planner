/* IMPORT DEPENDENCIES */
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import BannerCarousel from "../banner_carousel/BannerCarousel";
import "./BannerStyles.css";

export default function Banner({ user }){

    const [quotes, setQuotes] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/quotes').then((r) => {
            if (r.ok){
                r.json().then((quotes) => {
                    setQuotes(quotes)
                })
            };
        }).catch((error) => setError(error));
    }, []);

    return(
        <div className="banner">
            <div className="banner-text">
                <h1 id="banner-header">{user.username}'s Gym Planner</h1>
                <h3 id="banner-sub-header">Let's do it {user.first_name}!</h3>
                <h6 id="banner-sub-statement">Put something interesting here...maybe a carousel.</h6>
                {(quotes.length < 1) ? <h3>Missing Quotes</h3> : <BannerCarousel quotes={quotes} />}
                <div id="banner-btn-container">
                    <button id="banner-btn" onClick={() => navigate("/workouts")}>Let's Go!</button>
                </div>
            </div>
        </div>
    )
};