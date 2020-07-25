import React, { useState } from 'react';
import './Skills.css';

import WebRTC from './webrtc-logo.svg';
import Netlify from './netlify-icon.svg';
import Autodesk from './autodesk-logo.png';
import Cura from './cura-icon.png';
import FinalCut from './fcp-icon.png';

const Skills = () => {
  const [displayListText, setDisplayListText] = useState(false);

  const handleToggleText = () => {
    setDisplayListText((prevTextState) => !prevTextState);
  };

  return (
    <div className="skills">
      <div className="skills__main-container">
        <div className="skills__sub-container">
          <h1>Skills Page</h1>
          <button onClick={handleToggleText}>
            {displayListText ? "Swap Text For Icons" : "Swap Icons For Text"}
          </button>
          <div className="skills__skills-container">
            <div
              className="skills__icons"
              style={{ display: !displayListText ? "flex" : "none" }}
            >
              <i className="devicon-javascript-plain icon"></i>
              <i className="devicon-html5-plain icon"></i>
              <i className="devicon-css3-plain icon"></i>
              <i className="devicon-postgresql-plain icon"></i>
              <i className="devicon-express-original icon"></i>
              <i className="devicon-react-original icon"></i>
              <img alt="WebRTC logo" src={WebRTC} className="svg"></img>
              <i className="devicon-typescript-plain icon"></i>
              <i className="devicon-nodejs-plain icon"></i>
              <i className="devicon-npm-original-wordmark icon"></i>
              <i className="devicon-github-plain icon"></i>
              <i className="devicon-heroku-plain icon"></i>
              <img alt="Netlify logo" src={Netlify} className="svg"></img>
              <i className="devicon-visualstudio-plain icon"></i>
              <i className="devicon-atom-original icon"></i>
              <i className="devicon-bootstrap-plain icon"></i>
              <i className="devicon-chrome-plain icon"></i>
              <i className="devicon-google-plain icon"></i>
              <img
                alt="Final Cut Pro logo"
                src={FinalCut}
                className="svg"
              ></img>
              <i class="fab fa-youtube"></i>
              <i className="devicon-photoshop-plain icon"></i>
              <i className="devicon-illustrator-plain icon"></i>
              <i className="devicon-inkscape-plain icon"></i>
              <i className="devicon-wordpress-plain icon"></i>
              <i className="devicon-trello-plain icon"></i>
              <i className="devicon-twitter-plain icon"></i>
              <i className="devicon-linkedin-plain icon"></i>
              <i className="devicon-slack-plain icon"></i>
              <img alt="Autodesk logo" src={Autodesk} className="svg"></img>
              <img alt="Cura logo" src={Cura} className="svg"></img>
            </div>
            <ul style={{ display: displayListText ? "block" : "none" }}>
              <li className="text">JavaScript</li>
              <li className="text">HTML5</li>
              <li className="text">CSS3</li>
              <li className="text">PostgreSQL</li>
              <li className="text">Express.js</li>
              <li className="text">React.js</li>
              <li className="text">WebRTC</li>
              <li className="text">TypeScript</li>
              <li className="text">Node.js</li>
              <li className="text">npm</li>
              <li className="text">GitHub</li>
              <li className="text">Heroku</li>
              <li className="text">Netlify</li>
              <li className="text">Visual Studio</li>
              <li className="text">Atom</li>
              <li className="text">Bootstrap</li>
              <li className="text">Chrome</li>
              <li className="text">Google</li>
              <li className="text">Final Cut Pro X</li>
              <li className="text">YouTube</li>
              <li className="text">Photoshop</li>
              <li className="text">Illustrator</li>
              <li className="text">Inkscape</li>
              <li className="text">Wordpress</li>
              <li className="text">Trello</li>
              <li className="text">Twitter</li>
              <li className="text">Linkedin</li>
              <li className="text">Slack</li>
              <li className="text">Autodesk 360</li>
              <li className="text">Cura</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
