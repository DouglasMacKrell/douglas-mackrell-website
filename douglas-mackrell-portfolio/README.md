# Douglas MacKrell's Personal Portfolio Website!

### Live @ [douglasmackrell.com](https://douglasmackrell.com/)

[![Douglas MacKrell](https://www.douglasmackrell.com/Doug-Portfolio-Social.png)](https://dougmackrell.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/aa6adcc1-00f7-472a-b25b-ae3ba878ddc6/deploy-status)](https://app.netlify.com/sites/douglasmackrell/deploys)

**Douglas MacKrell** is a NYC based Full Stack Web Developer who is currently looking for work! 

** **

## Videos

<a href="http://www.youtube.com/watch?feature=player_embedded&v=9q5eMg6uLR0" target="_blank"><img src="http://img.youtube.com/vi/9q5eMg6uLR0/0.jpg" 
alt="Responsive Navigation Bar With Slide Drawer - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Responsive Navigation Bar With Slide Drawer - Personal Portfolio Website](https://youtu.be/9q5eMg6uLR0)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=n-HLFWfexMg" target="_blank"><img src="http://img.youtube.com/vi/n-HLFWfexMg/0.jpg" 
alt="Home Page - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Home Page - Personal Portfolio Website](https://youtu.be/n-HLFWfexMg)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=XqCmr_97EZU" target="_blank"><img src="http://img.youtube.com/vi/XqCmr_97EZU/0.jpg" 
alt="About Page - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [About Page - Personal Portfolio Website](https://youtu.be/XqCmr_97EZU)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=ivdGSl5cUyQ" target="_blank"><img src="http://img.youtube.com/vi/ivdGSl5cUyQ/0.jpg" 
alt="Responsive Footer With Links - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Responsive Footer With Links - Personal Portfolio Website](https://youtu.be/ivdGSl5cUyQ)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CyR5gY_ErOo" target="_blank"><img src="http://img.youtube.com/vi/CyR5gY_ErOo/0.jpg" 
alt="Skills Page - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Skills Page - Personal Portfolio Website](https://youtu.be/CyR5gY_ErOo)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=Yf_M0krKBVY" target="_blank"><img src="http://img.youtube.com/vi/Yf_M0krKBVY/0.jpg" 
alt="Projects Page Part 2 - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Projects Page Part 2 - Personal Portfolio Website](https://youtu.be/Yf_M0krKBVY)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=9OHYr34705M" target="_blank"><img src="http://img.youtube.com/vi/9OHYr34705M/0.jpg" 
alt="Project Cards | Project Page - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Project Cards | Project Page - Personal Portfolio Website](https://youtu.be/9OHYr34705M)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=zUU8kzKjxfY" target="_blank"><img src="http://img.youtube.com/vi/zUU8kzKjxfY/0.jpg" 
alt="Updating Skills and Project Pages - Personal Portfolio Website" width="240" height="180" border="10" /></a>  
* [Updating Skills and Project Pages - Personal Portfolio Website](https://youtu.be/zUU8kzKjxfY)

## THE PROBLEM
Doug needs a website to show off his cool stuff.

## THE SOLUTION
This personal website portfolio project is designed to showcase all of Doug's cool stuff. Slim in design this one-page app will highlight:

* About
* Projects
  * Awards and Recognition
  * Live Link
  * GitHub Repo Link
* Skills
* Links
  * Resume
  * GitHub
  * YouTube
  * Twitter
  * Email

** **

## Features

Users are able to:

* Navigation Bar
  * Shows site logo which acts as a Home Page Redirect button
  * Removes links on right side of screen when screen is too small and replaces with a Hamburger Menu button on left
* Footer
  * Links to:
    * Douglas MacKrell's GitHub Profile
    * Douglas MacKrell's YouTube Channel
    * Douglas MacKrell's Twitter Profile
    * Email mailto Link with format subject and body 
* Slide Drawer
  * Is only accessible on smaller screens
  * Animates on and off screen with a transition effect
  * Accessed through a hamburger menu button
* Backdrop
  * Overlays site when Slide Drawer is open
  * Listens for click to close Slide Drawer when open
* Home Page
  * Resume Button leads to Douglas MacKrell's resume hosted on Google Drive
  * Uses a YouTube video as a background with the react-youtube-background dependency
* About Page
  * Handsome headshot of Douglas MacKrell floats to the left around text
  * Embedded YouTube playlist of Going Green episodes - Douglas MacKrell's ongoing YouTube series detailing his ongoing quest to complete at least 365 days of non-stop commits to GitHub
* Projects Page
  * Houses reusable Project Cards
* Project Cards
  * Accordion opens to reveal:
    * Description
    * Awards
    * Live link
    * GitHub repo link
* Skills
  * Sectioned icons representing Douglas MacKrell's various skills
    * On hover, changes color and reveals text defining each icon
  * Button to swap icons for an alphabetized text list of all skills

## Future Features

* Add more completed projects as Project Cards on the Projects Page
* Add a specific page to showcase Douglas MacKrell's video production work
* Keep links fresh and relevant

## Technical Milestones

* Creating a responsive animated Slide Drawer in plain JavaScript, HTML5, and CSS3
* Incorporating icons through Fontawesome and Devicon
* Learning how to adjust SVG files so they can be controlled directly through CSS3

## Technologies Used

* **React.js** For the front-end/client interface of my app
* **react-youtube-background** to use a YouTube video as the background of my Home Page
* **JavaScript**
* **HTML5**
* **CSS3**

## Local Setup

**NOTE: You must install [Node.js](https://nodejs.org) in your computer for this to run.**

You can check to see if you already have Node.js by typing `node -v` in your terminal. If your shell/terminal doesn't complain and you see version numbers you are good to go.

1. Clone this repo into a folder of your choice:

       `git clone https://github.com/DouglasMacKrell/douglas-mackrell-website.git`

2. Install dependencies for the React App (`douglas-mackrell-portfolio` folder):

       `cd douglas-mackrell-portfolio && npm install`

4. To launch the React App, inside the `douglas-mackrell-portfolio` folder, and run:

       `npm start`

10. A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

---

### Please check out one of my favorite projects, [DougTV!](https://dougtv.herokuapp.com)

---

[![DougTV Social Media](https://dougtv.herokuapp.com/DougTV-Social.png)](https://dougtv.herokuapp.com)

---

<details>
    <summary>
        Before you leave, please take note:
    </summary>

You're the best! Thank you for visiting!

Please give this project a star and be sure to check out my [YouTube Channel](https://youtube.com/BigMacKrell)!

</details>

** **

**WIREFRAMES**

COMING SOON!