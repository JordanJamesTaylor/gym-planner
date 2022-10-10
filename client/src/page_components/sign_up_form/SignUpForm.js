/* IMPORT DEPENDENCIES */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* IMPORT STYLING */
import "./SignUpForm.css";

/* IMPORT MEDIA */
import logo from "../../images/gym-logo.png";

export default function SignInForm({ toggleForms, setUser }){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

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
        <div id="suf-page">
            <form className="suf-form" onSubmit={handleSignUpSubmit} >
            <h1 id="suf-form-title">Welcome Back!</h1>
            <p id="suf-form-quote">The only person you are destined to become is the person you decide to be.</p>            
            <img id="suf-form-logo" src={ logo } alt="logo" />
            
            <div id="suf-items">

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

                <label className="suf-labels" htmlFor="username"><b>Usename</b></label>
                <input className="suf-form-inputs" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                <label className="suf-labels" htmlFor="email"><b>Email</b></label>
                <input className="suf-form-inputs" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label className="suf-labels" htmlFor="password"><b>Password</b></label>
                <input className="suf-form-inputs" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label className="suf-labels" htmlFor="age"><b>Age</b></label>
                <input className="suf-form-inputs" type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} required />

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
                <div className="si-form-btn-container">
                    <button id="si-btn" type="submit">Sign In</button>
                    <button id="create-account-btn" type="button" onClick={toggleForms}>Have An Account?</button>
                </div>
            </div>

            </form>
        </div>
    )
}