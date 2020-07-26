import React, { useState } from "react";
import "./Skills.css";

import WebRTC from "./webrtc-logo.svg";
import Netlify from "./netlify-icon.svg";
import Autodesk from "./autodesk-logo.png";
import Cura from "./cura-icon.png";
import FinalCut from "./fcp-icon.png";
import YouTubeIcon from "./youtube-3.svg";

const Skills = () => {
  const [displayListText, setDisplayListText] = useState(false);

  const handleToggleText = () => {
    setDisplayListText((prevTextState) => !prevTextState);
  };

  return (
    <div className="skills">
      <div className="skills__main-container">
        <div className="skills__sub-container">
          <h1>Douglas MacKrell's Proven Skills</h1>
          <button onClick={handleToggleText}>
            {displayListText ? "Swap Text For Icons" : "Swap Icons For Text"}
          </button>
          <div className="skills__skills-container">
            <div
              className="skills__icons"
              style={{ display: !displayListText ? "flex" : "none" }}
            >
              <div className="icon-container">
                <i className="devicon-javascript-plain icon"></i>
                <p>JavaScript</p>
              </div>
              <div className="icon-container">
                <i className="devicon-html5-plain icon"></i>
                <p>HTML5</p>
              </div>
              <div className="icon-container">
                <i className="devicon-css3-plain icon"></i>
                <p>CSS3</p>
              </div>
              <div className="icon-container">
                <i className="devicon-postgresql-plain icon"></i>
                <p>PostgreSQL</p>
              </div>
              <div className="icon-container">
                <i className="devicon-express-original icon"></i>
                <p>Express.js</p>
              </div>
              <div className="icon-container">
                <i className="devicon-react-original icon"></i>
                <p>React.js</p>
              </div>
              <div className="icon-container">
                <img alt="WebRTC logo" src={WebRTC} className="svg"></img>
                <p>WebRTC</p>
              </div>
              <div className="icon-container">
                <i className="devicon-typescript-plain icon"></i>
                <p>TypeScript</p>
              </div>
              <div className="icon-container">
                <i className="devicon-nodejs-plain icon"></i>
                <p>Node.js</p>
              </div>
              <div className="icon-container">
                <i className="devicon-npm-original-wordmark icon"></i>
                <p>npm</p>
              </div>
              <div className="icon-container">
                <i className="devicon-github-plain icon"></i>
                <p>GitHub</p>
              </div>
              <div className="icon-container">
                <i className="devicon-heroku-plain icon"></i>
                <p>Heroku</p>
              </div>
              <div className="icon-container">
                <img alt="Netlify logo" src={Netlify} className="svg"></img>
                <p>Netlify</p>
              </div>
              <div className="icon-container">
                <i className="devicon-visualstudio-plain icon"></i>
                <p>Visual Studio</p>
              </div>
              <div className="icon-container">
                <i className="devicon-atom-original icon"></i>
                <p>Atom</p>
              </div>
              <div className="icon-container">
                <i className="devicon-bootstrap-plain icon"></i>
                <p>Bootstrap</p>
              </div>
              <div className="icon-container">
                <i className="devicon-chrome-plain icon"></i>
                <p>Chrome</p>
              </div>
              <div className="icon-container">
                <i className="devicon-google-plain icon"></i>
                <p>Google</p>
              </div>
              <div className="icon-container">
                <img
                  alt="Final Cut Pro logo"
                  src={FinalCut}
                  className="svg"
                ></img>
                <p>Final Cut Pro X</p>
              </div>
              <div className="icon-container">
                <img alt="YouTube logo" src={YouTubeIcon} className="svg"></img>
                <p>YouTube</p>
              </div>
              <div className="icon-container">
                <i className="devicon-photoshop-plain icon"></i>
                <p>Photoshop</p>
              </div>
              <div className="icon-container">
                <i className="devicon-illustrator-plain icon"></i>
                <p>Illustrator</p>
              </div>
              <div className="icon-container">
                <i className="devicon-inkscape-plain icon"></i>
                <p>Inkscape</p>
              </div>
              <div className="icon-container">
                <i className="devicon-wordpress-plain icon"></i>
                <p>Wordpress</p>
              </div>
              <div className="icon-container">
                <i className="devicon-trello-plain icon"></i>
                <p>Trello</p>
              </div>
              <div className="icon-container">
                <i className="devicon-twitter-plain icon"></i>
                <p>Twitter</p>
              </div>
              <div className="icon-container">
                <i className="devicon-linkedin-plain icon"></i>
                <p>LinkedIn</p>
              </div>
              <div className="icon-container">
                <i className="devicon-slack-plain icon"></i>
                <p>Slack</p>
              </div>
              <div className="icon-container">
                <img alt="Autodesk logo" src={Autodesk} className="svg"></img>
                <p>Autodesk 360</p>
              </div>
              <div className="icon-container">
                <img alt="Cura logo" src={Cura} className="svg"></img>
                <p>Cura</p>
              </div>
            </div>
            <ul style={{ display: displayListText ? "block" : "none" }}>
              <li className="text">Atom</li>
              <li className="text">Autodesk 360</li>
              <li className="text">Bootstrap</li>
              <li className="text">Chrome</li>
              <li className="text">CSS3</li>
              <li className="text">Cura</li>
              <li className="text">Express.js</li>
              <li className="text">Final Cut Pro X</li>
              <li className="text">GitHub</li>
              <li className="text">Google</li>
              <li className="text">Heroku</li>
              <li className="text">HTML5</li>
              <li className="text">Illustrator</li>
              <li className="text">Inkscape</li>
              <li className="text">JavaScript</li>
              <li className="text">Linkedin</li>
              <li className="text">Netlify</li>
              <li className="text">Node.js</li>
              <li className="text">npm</li>
              <li className="text">Photoshop</li>
              <li className="text">PostgreSQL</li>
              <li className="text">React.js</li>
              <li className="text">Slack</li>
              <li className="text">Trello</li>
              <li className="text">Twitter</li>
              <li className="text">TypeScript</li>
              <li className="text">Visual Studio</li>
              <li className="text">WebRTC</li>
              <li className="text">Wordpress</li>
              <li className="text">YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
