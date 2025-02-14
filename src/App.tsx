import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './UI/Home'
import About from "./UI/About";
import Contact from "./UI/ContactMe";
import ProjectPage from "./UI/ProjectPage";
import Projects from "./UI/Project";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/:id" element={<ProjectPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App