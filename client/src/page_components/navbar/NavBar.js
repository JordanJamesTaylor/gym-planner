/* IMPORT DEPENDENCIES */
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./NavBar.css"

export default function NavBar(){

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => navigate("/login"));
    };

    return(
        <ul id="nav-bar-container">
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/")}>Home</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/workouts")}>Workouts</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/")}>Contact</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={() => navigate("/profile")}>Profile</button></li>
            <li className="nav-bar-items"><button className="nav-bar-btns" onClick={handleLogout}>Logout</button></li>
        </ul>
    )
};