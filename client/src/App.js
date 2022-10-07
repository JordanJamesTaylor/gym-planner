/* IMPORT DEPENDENCIES */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";

/* IMPORT CUSTOM COMPONENTS */
import LoginPage from './pages/login/LoginPage';
import NavBar from './page_components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import WorkoutsPage from './pages/workouts/WorkoutsPage';

export default function App() {
  
  const [user, setUser] = useState({});

  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok){
        r.json().then((user) => {
          setUser(user);
        });
      };
    }).catch((error) => console.log("ERROR WHEN FETCHING USER: ", error));
  }, []);

  console.log(`LOGGED IN USER: ${user.first_name} ${user.last_name}`);

  if(!user.username) return <LoginPage exact path="/login" setUser={setUser} />
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/profile" element={<Profile user={user} />} />
        <Route exact path="/home" element={<Home user={user} />} />
        <Route exact path="/workouts" element={<WorkoutsPage />} />
      </Routes>
    </>
  );
};