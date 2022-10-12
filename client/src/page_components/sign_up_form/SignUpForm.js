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
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [targetWeight, setTargetWeight] = useState("")

    // const [newUser, setNewUser] = useState({
    //     firstName,
    //     lastName,
    //     username,
    //     email,
    //     password,
    //     age,
    //     height,
    //     weight,
    //     targetWeight,
    // })

    const navigate = useNavigate();

    function handleSignUpSubmit(e){
        e.preventDefault();

        const signUpFormData = new FormData()
        signUpFormData.append("first_name", firstName)
        signUpFormData.append("last_name", lastName)
        signUpFormData.append("username", username)
        signUpFormData.append("email", email)
        signUpFormData.append("password", password)
        signUpFormData.append("age", age)
        signUpFormData.append("height", height)
        signUpFormData.append("weight", weight)
        signUpFormData.append("target_weight", targetWeight)

        fetch("/users", {
            method: "POST",
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
                        <input className="suf-sub-inputs" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="suf-sub-items">                 
                        <input className="suf-sub-inputs" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                </div>
                <input className="suf-form-inputs" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input className="suf-form-inputs" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="suf-form-inputs" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="suf-sub-container">
                    <div className="suf-sub-items">
                        <input className="suf-form-inputs" type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                        <input className="suf-sub-inputs" type="number" placeholder="Target Weight" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)} required />
                    </div>

                    <div className="suf-sub-items">
                        <input className="suf-sub-inputs" type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} required />
                        <input className="suf-sub-inputs" type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                    </div>
                </div>
                <div className="si-form-btn-container">
                    <button id="si-btn" type="submit">Sign Up</button>
                    <button id="create-account-btn" type="button" onClick={toggleForms}>Have An Account?</button>
                </div>
            </div>

            </form>
        </div>
    )
}