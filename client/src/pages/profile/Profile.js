/* IMPORT STYLING */
import "./Profile.css";

/* IMPORT MEDIA */
import deafultAvatar from "./default-avatar.png";

export default function Profile({ user }){

    return(
        <div id="profile-page">
            {user.avatar ? <img id="avatar" src={user.avatar} alt="Avatar" /> : <img id="avatar" src={deafultAvatar} alt="Avatar" />}           
            <h1 id="username">Hello {user.username}!</h1>

            <div id="user-states-grid">
                <div className="user-states-column" >
                    <h3 className="user-states-row">47</h3>
                    <h3 className="user-states-row">Total Points</h3>
                </div>
                <div id="grid-divider"></div>
                <div className="user-states-column" >
                    <h3 className="user-states-row">4</h3>
                    <h3 className="user-states-row">Daily Streak</h3>
                </div>
                <div id="grid-divider"></div>
                <div className="user-states-column" >
                    <h3 className="user-states-row">14</h3>
                    <h3 className="user-states-row">Weekly Streak</h3>
                </div>
            </div>

        </div>
    )
};

{/* <h3 className="user-state">3</h3>
<h3 className="state-period">Daily Streak | </h3>
<h3 className="user-state">4</h3>
<h3 className="state-period">Weekly Streak</h3> */}