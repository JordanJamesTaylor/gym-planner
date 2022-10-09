/* IMPORT DEPENDENCIES */
import { useState } from "react";

/* IMPORT CUSTOM COMPONENTS */
import SignIn from "../../page_components/sign_in_form/SignIn";
import SignUp from "../../page_components/sign_up_form/SignUp";

/* IMPOPT STYLING */
import "./LoginPage.css";

export default function LogginPage({ setUser }){

    const [showSignIn, setShowSignIn] = useState(true);

    const toggleForms = () => setShowSignIn(!showSignIn);
    
    return(
        <div className="login-page">
            {showSignIn ? <SignIn setUser={setUser} toggleForms={toggleForms}/> : <SignUp setUser={setUser} toggleForms={toggleForms}/> }
        </div>
    )
};