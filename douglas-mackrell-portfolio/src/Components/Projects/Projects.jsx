import React, { useState } from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import HandMeDown from './Hand-Me.png'
import YouDown from './You-Down.png'

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
              content={`<em>Hand Me Down</em> is a social media site designed to connect user stories to garments of clothing with the goal of encouraging users to pass down their clothing and their stories to future generations, thereby increasing the value of fast fashion items and decreasing overall waste from fashion consumers. Users can create a Garment in their Digital Wardrobe that gives them the ability to post stories to the History of that Garment. Additionally, they can access a printable iron-on QR Code that links back to the Garment page, so users can pass down their garment and new users can easily connect to its accumulated history!  <hr style="height:2px;color:purple;background-color:purple"> <i class="fas fa-trophy"></i><em>Most Innovative App</em>, Uber + Pursuit 6.0 Hackathon <br> <a href="https://handmedown.herokuapp.com/"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/PeterFiorentino/HandMeDown"><i class="fab fa-github"></i>GITHUB REPO</a>`}
              image={HandMeDown}
            />
            <ProjectCard title="You Down With ELT?" content={`Hello`} image={YouDown} />
          </div>
        </div>
      </div>
    );
}

export default Projects
