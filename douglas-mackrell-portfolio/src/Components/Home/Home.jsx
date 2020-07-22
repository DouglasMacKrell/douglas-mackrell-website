import React from "react";
import YoutubeBackground from "react-youtube-background";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <YoutubeBackground videoId="KdURSnjeml0" overlay="rgba(0,0,0,.4)" className="home__youtube">
        <div className="home__text-container">
          <div className="home__douglas-mackrell">
            <h1>Douglas MacKrell</h1>
          </div>
          <div className="home__resume-button">
            <a
              href="https://docs.google.com/document/d/1oqBG13B7k_H2bzG89-kpQib1bSnEeImcoTGLlQXJKIE/edit?usp=sharing"
              download="Douglas MacKrell Resume"
            >
              <button>View Resume</button>
            </a>
          </div>
        </div>
      </YoutubeBackground>
    </div>
  );
};

export default Home;
