import React from "react";
import DougHeadshot from "./Douglas-MacKrell-Headshot.jpg";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__main-container">
        <div className="about__sub-container">
          <div className="about__text-container">
            <img
              src={DougHeadshot}
              alt="A really handsome picture of Douglas MacKrell"
              className="about__headshot"
            ></img>
            <p>
              Douglas MacKrell is a New York City based Full Stack Web Developer
              who recently graduated from{" "}
              <a href="http://pursuit.org">Pursuit</a>, a highly selective
              12-month software engineering fellowship, with specific focus on
              Javascript, HTML, CSS, SQL, Postgres, Express, React, Node.js,
              NPM, GitHub, and Visual Studio Code. In his time at Pursuit,
              Douglas worked on several group projects and gained real world
              experience managing, committing, and successfully merging code
              within a shared code repository.
            </p>
            <p>
              Additionally, over the course of his time at Pursuit, he was a
              part of two award winning projects!{" "}
              <a href="https://handmedown.herokuapp.com/">Hand Me Down</a> was
              voted Most Innovative App at the 2020 Uber + Pursuit 6.2
              Hackathon, and{" "}
              <a href="https://www.pantry-party.com">Pantry Party</a> was
              awarded the Audience Choice Award at the 2020 Clorox + Pursuit 6.2
              Capstone Technical Showcase!
            </p>
            <p>
              Follow Douglas MacKrell as every day he attempts to turn his{" "}
              <a href="https://github.com/DouglasMacKrell">GitHub</a> commits
              entirely green in his new ongoing YouTube series, Going Green!
            </p>
          </div>
          <div className="about__youtube-container">
            <iframe
              className="about__youtube-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLhzzbQ0znSQsV2ZjHbllv5xcrH7GbX8AC"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
