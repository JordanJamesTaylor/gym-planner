/* IMPORT DEPENDENCIES */
import { useState, useEffect} from 'react';
import { Route, Routes, Router } from "react-router-dom";

/* IMPORT CUSTOM COMPONENTS */
import LoginPage from './pages/login/LoginPage';
import NavBar from './page_components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import WorkoutsPage from './pages/workouts/WorkoutsPage';

export default function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok){
        r.json().then((user) => {
          setUser(user);
        });
      };
    }).catch((error) => console.log("ERROR WHEN FETCHING USER: ", error));
  }, []);

  if(!user) return <LoginPage setUser={setUser} />;
  
  console.log(`LOGGED IN USER: ${user.first_name} ${user.last_name}`);
  
  return (
    <>
      <Routes>
        <Route exact path="/home" element={
          <>
            <NavBar />
            <Home user={user} />
          </>
        }/>
        <Route exact path="/profile" element={
          <>
            <NavBar />
            <Profile user={user} />
          </>
        }/>
        <Route exact path="/workouts" element={
          <>
            <NavBar />
            <WorkoutsPage /> 
          </>
        }/>
      
        <Route exact path="/login" element={<LoginPage setUser={setUser} />}/>
      </Routes>
    </>
  );
};