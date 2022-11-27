import React from 'react';
import Homepage from './Component/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import ProjectPage from './Component/ProjectPage';
import ServicePage from "./Component/ServicePage";
import About from "./Component/About";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App