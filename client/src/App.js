/* IMPORT DEPENDENCIES */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";

/* IMPORT CUSTOM COMPONENTS */
import NavBar from './page_components/navbar/NavBar';
import Home from './pages/home/Home';
import WorkoutsPage from './pages/workouts/WorkoutsPage';

export default function App() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/users/${1}`).then((r) => {
      if (r.ok){
        r.json().then((user) => setUser(user))
      }
    }).catch((error) => console.log("ERROR WHEN FETCHING USER: ", error));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home user={user} />} />
        <Route exact path="/workouts" element={<WorkoutsPage />} />
      </Routes>
    </>
  );
};

/*
  Navbar
  Banner
  Tiles
*/