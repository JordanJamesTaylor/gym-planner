/* IMPORT DEPENDENCIES */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./LoginPage.css";

export default function LoginPage({ setUser }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

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
    };

    return(
        <div id="login-page">
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="login-form-container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="password_confirmation"><b>Confirm Password</b></label>
                    <input type="password_confirmation" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </div>

                <div className="login-form-container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
};