import React, { useState } from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import HandMeDown from './Hand-Me.png'

import './Projects.css'

const Projects = () => {
    const [showCard, setShowCard] = useState(false)
    const [selectedCard, setSelectedCard] = useState(0)

    const handleSelectCard = (e) => {
        setSelectedCard(e.target.value)
        setShowCard((prevShowState) => !prevShowState)
    }

    return (
      <div className="projects">
        <div className="projects__main-container">
          <div className="projects__sub-container">
            <h1>Projects</h1>
            <ProjectCard
              title="Hand Me Down"
              content={`Whoa! So cool! Check out this site by clicking <a href="https://handmedown.herokuapp.com/">HERE</a>.`}
              image={HandMeDown}
            />
          </div>
        </div>
      </div>
    );
}

export default Projects
