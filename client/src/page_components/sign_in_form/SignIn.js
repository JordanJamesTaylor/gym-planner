/* IMPORT DEPENDENCIES */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./SignIn.css";

/* IMPORT MEDIA */
import logo from "../../images/gym-logo.png"

export default function SignIn({ setUser, toggleForms }){

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
        <div className="login-page sign-in-form-container">
            <form className="sign-in-form" onSubmit={handleSignInSubmit}>
                <h1 id="sign-in-form-title">GYM APP BABY!</h1>
                <img id="sign-in-form-logo" src={ logo } alt="logo" />
                <div className="sign-in-form-items">

                    <label className="sign-in-form-labels" htmlFor="username"><b>Username</b></label>
                    <input className="sign-in-form-inputs" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <label className="sign-in-form-labels" htmlFor="password"><b>Password</b></label>
                    <input className="sign-in-form-inputs" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label className="sign-in-form-labels" htmlFor="password_confirmation"><b>Confirm Password</b></label>
                    <input className="sign-in-form-inputs" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button id="sign-in-form-btn" type="submit">Sign In</button>
                    <p id="signin-switch-forms" onClick={toggleForms}>Don't have an account?</p>
                </div>
            </form>
        </div>
    )
};