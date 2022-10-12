/* IMPORT STYLING */
import "./Profile.css";

/* IMPORT MEDIA */
import deafultAvatar from "./default-avatar.jpg";
import uploadIcon from "./upload-icon.jpg";

export default function Profile({ user, setUser }){

    function updateAvatar(avatar) {

        const avatarData = new FormData()
        avatarData.append("avatar", avatar)

        fetch(`/users/updateavatar/${user.id}`, { 
          method: "PATCH",
          body: avatarData,
        }).then((r) => {
        if (r.ok) {
            r.json().then((updatedUser) => setUser(updatedUser))
        } else {
            r.json().then((error) => console.log("Error when updating avatar: ", error));
        }});
    };

    return(
        <div id="profile-page">
            {user.avatar_url ? 
            <label>
                <input type="file" hidden onChange={(e) => updateAvatar(e.target.files[0])} /> 
                <img id="profile-avatar" src={user.avatar_url} alt="Avatar"/> 
            </label> 
            : 
            <label id="default-avatar-container">
                <img id="default-avatar" src={deafultAvatar} alt="Avatar"/>
                <img id="upload-icon" src={uploadIcon} alt="Avatar"/>
                <input type="file" hidden onChange={(e) => updateAvatar(e.target.files[0])} />
            </label>
            }           
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
