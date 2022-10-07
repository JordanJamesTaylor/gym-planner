/* IMPORT DEPENDENCIES */
import { useState } from "react";

export default function LoginPage({ setUser }){

    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("LOGIN USERNAME: ", username);
        
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        })
        .then((r) => r.json())
        .then((user) => setUser(user));
    };

    return(
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
    </form>
    )
}