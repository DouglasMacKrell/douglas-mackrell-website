import React from "react";
import YoutubeBackground from "react-youtube-background";

const Home = () => {
  return (
    <div className="Home-body">
      <YoutubeBackground videoId="KdURSnjeml0" overlay="rgba(0,0,0,.4)">
        <div className="Home-text-container">
          <div className="Home-test">
            <h1>Douglas MacKrell</h1>
          </div>
          <div className="Home-download">
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
