import React, { Component } from 'react';
import HandMe from './Hand-Me.png';
import YouDown from './You-Down.png';
import './Projects.css'

const Projects = () => {
    return (
        <div className='Projects-body'>
            <div className='Projects-text-container'>
                <h1>Projects</h1>
                <div className='Projects-card'>
                    <img className='Projects-logo' src={HandMe} alt='Hand Me Down'></img>
                    <p>Fringilla est ullamcorper eget nulla facilisi etiam. Adipiscing at in tellus integer. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Accumsan tortor posuere ac ut consequat. Eleifend mi in nulla posuere sollicitudin. Urna molestie at elementum eu facilisis sed odio morbi quis. Mi proin sed libero enim sed faucibus turpis in eu. Morbi enim nunc faucibus a pellentesque. Est ullamcorper eget nulla facilisi. Et netus et malesuada fames. Volutpat sed cras ornare arcu. Suspendisse in est ante in nibh mauris. Urna nec tincidunt praesent semper feugiat nibh sed. Hac habitasse platea dictumst quisque.</p>
                </div>
                <div className='Projects-card'>
                    <img className='Projects-logo' src={YouDown} alt='You Down With ELT'></img>
                    <p>Dolor magna eget est lorem ipsum dolor sit. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Non blandit massa enim nec dui nunc. Massa placerat duis ultricies lacus sed turpis tincidunt id. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Netus et malesuada fames ac. Odio morbi quis commodo odio aenean sed. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Egestas integer eget aliquet nibh praesent. In cursus turpis massa tincidunt dui ut ornare lectus. Ullamcorper malesuada proin libero nunc consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects