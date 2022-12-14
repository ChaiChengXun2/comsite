import React, { useEffect, useState } from 'react';
import Homepage from './Component/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import ProjectPage from './Component/ProjectPage';
import ServicePage from "./Component/ServicePage";
import About from "./Component/About";
import NotFound from "./Component/NotFound";
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "./firebase";
import { onValue, ref } from 'firebase/database';
import { db } from "./database";

const auth = getAuth(app); 

const App = () => {

  const [ccx, setCCX] = useState(false);

  useEffect(() => {
    signInAnonymously(auth).then(() => {
      onValue(ref(db, '/1FXNuFqKRteTVj4-hzrdc0hf575JdUqsn1Ds0JqA7J3k/Sheet1'), (snapshot) => {
        const data = snapshot.val(); 
        if (data !== null) {
          setCCX(Object.values(data))
        }
      }, {onlyOnce: true})
    });
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage ccx={ccx}/>}></Route>
        <Route path="/projects" element={<ProjectPage ccx={ccx}/>}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App  