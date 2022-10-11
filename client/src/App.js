/* IMPORT DEPENDENCIES */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";

/* IMPORT CUSTOM COMPONENTS */
import LoginPage from './pages/login/LoginPage';
import LoadingPage from './pages/loading/Loading';
import NavBar from './page_components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import WorkoutsPage from './pages/workouts/WorkoutsPage';

export default function App() {
  
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok){
        r.json().then((user) => {
          setUser(user);
          setLoaded(true);
        });
      };
    }).catch((error) => console.log("ERROR WHEN FETCHING USER: ", error));
  }, []);

  if(!user){
    return <LoginPage setUser={setUser} />
  }else if(!loaded){
    return <LoadingPage />
  };
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={
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