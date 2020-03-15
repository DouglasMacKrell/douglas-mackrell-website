import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background'

class Header extends Component {

    render() {

        return (
            <div className='Header-body'>
                <YoutubeBackground
                videoId='KdURSnjeml0'>
                    <div className='Header-text-container'>
                        <p>TEST</p>
                    </div>
                </YoutubeBackground>
            </div>
        )

    }
}

export default Header


