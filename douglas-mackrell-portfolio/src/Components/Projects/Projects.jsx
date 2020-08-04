import React from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import HandMeDown from "./Hand-Me-Down.gif";
import YouDown from "./You-Down-With.gif";
import PantryParty from "./Pantry-Party-Site-Display.gif";
import DougTV from "./DougTV.gif";
import GFHangman from "./GF-Hangman.gif";

import "./Projects.css";

const Projects = () => {

  return (
    <div className="projects">
      <div className="projects__main-container">
        <div className="projects__sub-container">
          <h1>Projects</h1>
          <ProjectCard
            title="Pantry Party"
            content={`<em>Pantry Party</em> is a one-to-many video broadcasting platform designed to allow users to create and curate recipes, connect with an audience, and host live cooking shows centered around those recipes with easy to use onscreen tools. The unique video broadcast feature is powered by a peer connection established through WebRTC and socket.io! <hr style="height:2px;color:purple;background-color:purple"> <i class="fas fa-trophy"></i><em>Audience Choice Award</em>, 2020 Clorox DTC + Pursuit 6.2 Capstone Technical Showcase <br> <a href="https://www.pantry-party.com"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/sislam16/Pantry-Party"><i class="fab fa-github"></i>GITHUB REPO</a> <br> <a href="https://youtu.be/m-SA19aFIcw"><i class="fab fa-youtube"></i>VIDEO OF TECHNICAL SHOWCASE<a>`}
            image={PantryParty}
          />
          <ProjectCard
            title="Hand Me Down"
            content={`<em>Hand Me Down</em> is a social media site designed to connect user stories to garments of clothing with the goal of encouraging users to pass down their clothing and their stories to future generations, thereby increasing the value of fast fashion items and decreasing overall waste from fashion consumers. Users can create a Garment in their Digital Wardrobe that gives them the ability to post stories to the History of that Garment. Additionally, they can access a printable iron-on QR Code that links back to the Garment page, so users can pass down their garment and new users can easily connect to its accumulated history!  <hr style="height:2px;color:purple;background-color:purple"> <i class="fas fa-trophy"></i><em>Most Innovative App</em>, Uber + Pursuit 6.0 Hackathon <br> <a href="https://handmedown.herokuapp.com/"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/PeterFiorentino/HandMeDown"><i class="fab fa-github"></i>GITHUB REPO</a>`}
            image={HandMeDown}
          />
          <ProjectCard
            title="You Down With ELT?"
            content={`<em>You Down With ELT?</em> is an Gameshow App built in collaboration with Pfizer’s Global Security Team Leadership and Securitas for their annual All Hands Guard Force Training Event. Its purpose is to train Site Security Officers on the identities of Pfizer’s Executive Leadership Team and Board of Directors in a fun and engaging way. While the game is designed to be played with up to 3 players, <em>You Down With ELT?</em> can also be played by a single player who will be given a letter grade at the end depending on their score for one-on-one facilitated training exercises. The entire Web App was designed in plain HTML5, JavaScript, and CSS3! <hr style="height:2px;color:purple;background-color:purple"> <a href="https://douglasmackrell.github.io/ELT-Gameshow/"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/DouglasMacKrell/ELT-Gameshow"><i class="fab fa-github"></i>GITHUB REPO</a>`}
            image={YouDown}
          />
          <ProjectCard
            title="DougTV"
            content={`<em>DougTV</em> is a one-to-many Video Broadcasting Full Stack Web App that allows users to broadcast a live video stream to an audience anywhere in the world! Built as a proof of concept and learning exercise while creating <em>Pantry Party, DougTV</em> stands as a fully functional video broadcast system designed for quick and easy use. <hr style="height:2px;color:purple;background-color:purple"> <a href="https://dougtv.herokuapp.com/"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/DouglasMacKrell/DougTV"><i class="fab fa-github"></i>GITHUB REPO</a> <br> <a href="https://youtu.be/MhrdFbG6gCU"><i class="fab fa-youtube"></i>VIDEO CODE REVIEW</a>`}
            image={DougTV}
          />
          <ProjectCard
            title="Gravity Falls Hangman"
            content={`<em>Bill Cipher's Kdqjpdq!</em> or <em>Gravity Falls Hangman</em> is a game that is themed after the hit Disney TV show, Gravity Falls. It tasks players with stopping Bill Cipher’s evil plan by deciphering his secret word! These words are encoded with the Caesar Cipher set three letters back. If the player can decode or solve the secret word within 6 guesses, they defeat Bill Cipher and win the game! Just don’t let Bill get too powerful… This Web App was designed in plain HTML5, JavaScript, and CSS3! <hr style="height:2px;color:purple;background-color:purple"> <a href="https://douglasmackrell.github.io/Gravity-Falls-Hangman/"><i class="fas fa-link"></i>LIVE LINK</a> <br> <a href="https://github.com/DouglasMacKrell/Gravity-Falls-Hangman"><i class="fab fa-github"></i>GITHUB REPO</a> <br> <a href="https://youtu.be/aMwQ52vcu1U"><i class="fab fa-youtube"></i>VIDEO CODE REVIEW`}
            image={GFHangman}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
