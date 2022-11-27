import React, { useEffect, useState } from 'react';
import "./projectpage.css";
import "./responsive.css";
import NavigationBar from "../NavigationBar";
import Contact from "../Contact";
import { FiFilter } from "react-icons/fi";
import Project from '../Project';
import Title from "../Title";
import ProjectModal from "../ProjectModal";

const ProjectPage = () => {

  useEffect(() => {
    document.title = "All Projects | ComSite"
  }, [])

  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false); 
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleFilter = e => {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const toggleClass = e => { 
    for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
      e.currentTarget.parentNode.children[i].classList.remove("active");
    }
    e.currentTarget.classList.toggle("active");
    setFilter(e.currentTarget.innerHTML);
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const keyUp = () => {
      document.querySelector(".choices").children[0].click();
      cards.forEach(card => {
        if (card.children[1].children[0].innerHTML.toLowerCase().includes(search.toLowerCase())) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      })
    }

    window.addEventListener("keyup", keyUp);

    return () => {window.removeEventListener("keyup", keyUp)}
  }, [search])

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    setSearch("");

    if (filter === "All") {
      cards.forEach(card => {
        card.style.display = "flex";
      })
    } else {
      cards.forEach(card => {
        if (card.children[1].children[1].innerHTML.toLowerCase() === filter.toLowerCase()) {
          card.style.display = "flex"
        } else {
          card.style.display = "none"
        }
      })
    }

  }, [filter])

  return (
    <div className='content flex-center-center projects-page'>
      <Title title='All Projects' sub='My Work' />
      <ProjectModal showModal={showModal} setShowModal={setShowModal} data={data}/>
      <NavigationBar />
      <section className='search-bar flex-start-center'>
        <div className='search flex-center-start'>
          <input placeholder='' className='default-text' autoComplete='off' type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
          <label className='default-text'>Search Projects</label>
        </div>
        <div className='filter flex-center-center' onClick={toggleFilter}>
          <FiFilter />
        </div>
      </section>
      <section className={`choices ${active ? "active" : ""}`}>
        <p onClick={toggleClass} className="default-text flex-center-center">All</p>
        <p onClick={toggleClass} className="default-text flex-center-center">Website</p>
        <p onClick={toggleClass} className="default-text flex-center-center">Template</p>
      </section>
      <div className="projects gay-grid">
        <Project imgSrc="cafe 1 marketing.png" title="Classy Cafe" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="cafe 2 marketing.png" title="Modern Cafe" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="skin care marketing.png" title="Beauty Products" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="portfolio 1 marketing.png" title="Personal Portfolio" type="Template" setShowModal={setShowModal} setData={setData}/>
        <Project imgSrc="portfolio 2 marketing.png" title="Classy Personal Portfolio" type="Template" setShowModal={setShowModal} setData={setData}/>
      </div>
      <Contact />
    </div>
  )
}

export default ProjectPage