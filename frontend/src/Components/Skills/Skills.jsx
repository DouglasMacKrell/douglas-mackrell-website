import React, { Component } from 'react';
import JavascriptLogo from './javascript-logo.png';
import NodeLogo from './Node-logo.png';
import PostgresLogo from './Posgres-logo.png';
import './Skills.css';

const Skills = () => {
    return (
        <div className='Skills-body'>
            <div className='Skills-text-container'>
                <h1>Skills</h1>
                <img className='Skills-logo' src={JavascriptLogo} alt='javascript'></img>
                <img className='Skills-logo' src={NodeLogo} alt='node'></img>
                <img className='Skills-logo' src={PostgresLogo} alt='postgres'></img>
            </div>
        </div>
    )
}

export default Skills