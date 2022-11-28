import React, { useEffect, useState } from 'react';
import Homepage from './Component/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import ProjectPage from './Component/ProjectPage';
import ServicePage from "./Component/ServicePage";
import About from "./Component/About";
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";
import { onValue, ref } from 'firebase/database';
import { db } from "./database";

const auth = getAuth(app); 

const App = () => {

  const [ccx, setCCX] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).then(setUser(true));
  }, [])

  useEffect(() => {
    if (user) {
      onValue(ref(db, '/1FXNuFqKRteTVj4-hzrdc0hf575JdUqsn1Ds0JqA7J3k/Sheet1'), (snapshot) => {
        const data = snapshot.val(); 
        if (data !== null) {
          setCCX(Object.values(data))
        }
      }, {onlyOnce: true})
    }
  }, [user])

  useEffect(() => {
    console.log(ccx);
  }, [ccx])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage ccx={ccx}/>}></Route>
        <Route path="/projects" element={<ProjectPage ccx={ccx}/>}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App  