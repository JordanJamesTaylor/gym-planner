/* IMPORT DEPENDENCIES */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./SignInForm.css";

/* IMPORT MEDIA */
import logo from "../../images/gym-logo.png";

export default function SignInForm({ toggleForms, setUser }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function handleSignInSubmit(e) {
        e.preventDefault();

        if(password === confirmPassword){
            fetch("/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
            })
            .then((r) => r.json())
            .then((user) => {
                setUser(user)
                navigate("/profile")
            });
        }else{
            console.log("INCORRECT USERNAME OR PASSWORD")
        };
    };
    return(
        <div id="si-page">
            <form className="si-form" onSubmit={handleSignInSubmit} >
            <h1 id="si-form-title">Welcome Back!</h1>
            <p id="si-form-quote">The only person you are destined to become is the person you decide to be.</p>            
            <img id="si-form-logo" src={ logo } alt="logo" />
            <div className="sif-items">

                <input className="si-form-inputs" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                <input className="si-form-inputs" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <input className="si-form-inputs" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                
                <div className="si-form-btn-container">
                    <button id="si-btn" type="submit">Sign In</button>
                    <button id="create-account-btn" type="button" onClick={toggleForms}>Create Account</button>
                </div>
            </div>
            </form>
        </div>
    )
}