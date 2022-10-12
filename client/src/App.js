/* IMPORT DEPENDENCIES */
import { useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import {Helmet} from "react-helmet";

/* IMPORT CUSTOM COMPONENTS */
import LoginPage from './pages/login/LoginPage';
import LoadingPage from './pages/loading/Loading';
import NavBar from './page_components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import WorkoutsPage from './pages/workouts/WorkoutsPage';

export default function App() {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok){
        r.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      };
    }).catch((error) => console.log("ERROR WHEN FETCHING USER: ", error));
  }, []);

  if(!user){
    return <LoginPage setUser={setUser} />
  }else if(loading){
    return <LoadingPage />
  };
  
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Gym App</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="A workout companion app"></meta>
      </Helmet>
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
            <Profile user={user} setUser={setUser} />
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