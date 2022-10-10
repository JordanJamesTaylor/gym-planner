/* IMPORT DEPENDENCIES */
import { useState } from "react";

/* IMPORT CUSTOM COMPONENTS */
import SignInForm from "../../page_components/sign_in_form/SignInForm";
import SignUpForm from "../../page_components/sign_up_form/SignUpForm";

/* IMPOPT STYLING */
import "./LoginPage.css";

/* IMPORT MEDIA */
import loginImage from "./gym-login-image.webp";

export default function LogginPage({ setUser }){

    const [showSignIn, setShowSignIn] = useState(true);

    const toggleForms = () => setShowSignIn(!showSignIn);

    return(
        <div className="login-page">
            <div className="login-page-lc">
                <img className="login-page-img" src={loginImage} alt="Stay Strong" />
            </div>
            <div className="login-page-rc">
                {showSignIn ? <SignInForm setUser={setUser} toggleForms={toggleForms}/> : <SignUpForm setUser={setUser} toggleForms={toggleForms}/> }
            </div>
        </div>
    )
};