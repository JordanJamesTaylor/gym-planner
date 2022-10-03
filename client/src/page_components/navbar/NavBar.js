/* IMPORT DEPENDENCIES */
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./NavBar.css"

export default function NavBar(){

    const navigate = useNavigate();

    return(
        <ul id="nav-bar-container">
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/home")}>Home</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/workouts")}>Workouts</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/")}>Contact</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/")}>About</button></li>
        </ul>
    )
};