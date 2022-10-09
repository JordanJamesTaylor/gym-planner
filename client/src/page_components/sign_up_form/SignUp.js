/* IMPORT DEPENDENCIES */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./SignUp.css";

/* IMPORT MEDIA */
import logo from "../../images/gym-logo.png"

export default function SignUp({ setUser, toggleForms }){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0); // CONVERT TO INT WHEN MAKING HTTP FORM
    const [weight, setWeight] = useState(0); // CONVERT TO INT WHEN MAKING HTTP FORM
    const [height, setHeight] = useState(0); // CONVERT TO INT WHEN MAKING HTTP FORM

    const navigate = useNavigate();

    function handleSignUpSubmit(e){
        e.preventDefault();

        const signUpFormData = new FormData();

        signUpFormData.append("first_name", firstName)
        signUpFormData.append("last_name", lastName)
        signUpFormData.append("username", username)
        signUpFormData.append("email", email)
        signUpFormData.append("password", password)
        signUpFormData.append("age", age)
        signUpFormData.append("weight", weight)
        signUpFormData.append("height", height)

        for (let pair of signUpFormData.entries()) {
            console.log(typeof pair[1]);
            console.log(pair[0]+ ': ' + pair[1]); 
        }

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: signUpFormData        
        })
        .then((r) => {
            if(r.ok){
                r.json().then((user) => {
                    setUser(user)
                    navigate("/profile")
                })    
            };
        }).catch((error) => console.log("ERROR WHEN CREATING NEW USER: ", error));
    };

    return(
        <div className="login-page sign-up-form-container">
            <form className="sign-up-form" onSubmit={handleSignUpSubmit}>
                <h1 id="sign-up-form-title">GYM APP BABY!</h1>
                <img id="sign-up-form-logo" src={ logo } alt="logo" />
                
                <div className="sign-up-form-items">
                <div className="suf-sub-container">
                    <div className="suf-sub-items">
                        <label className="suf-sub-labels" htmlFor="first-name"><b>First Name</b></label>
                        <span className="suf-sub-span"></span>
                        <input className="suf-sub-inputs" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="suf-sub-items">                 
                        <label className="suf-sub-labels" htmlFor="last-name"><b>Last Name</b></label>
                        <span className="suf-sub-span"></span>
                        <input className="suf-sub-inputs" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                </div>
                
                    <label className="sign-up-form-labels" htmlFor="username"><b>Usename</b></label>
                    <input className="sign-up-form-inputs" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <label className="sign-up-form-labels" htmlFor="email"><b>Email</b></label>
                    <input className="sign-up-form-inputs" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className="sign-up-form-labels" htmlFor="password"><b>Password</b></label>
                    <input className="sign-up-form-inputs" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label className="sign-up-form-labels" htmlFor="age"><b>Age</b></label>
                    <input className="sign-up-form-inputs" type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} required />

                    <div className="suf-sub-container">
                    <div className="suf-sub-items">
                        <label className="suf-sub-labels" htmlFor="height"><b>Height</b></label>
                        <span className="suf-sub-span"></span>
                        <input className="suf-sub-inputs" type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                    </div>

                    <div className="suf-sub-items">
                        <label className="suf-sub-labels" htmlFor="weight"><b>Weight</b></label>
                        <span className="suf-sub-span"></span>
                        <input className="suf-sub-inputs" type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                    </div>
                </div>
                <button id="sign-up-form-btn" type="submit">Sign Up</button>
                <p id="sign-up-switch-forms" onClick={toggleForms}>Already have an account?</p>
                </div>
            </form>
        </div>
    )
};
