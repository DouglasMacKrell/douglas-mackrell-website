import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background'

class Header extends Component {

    render() {

        return (
            <div className='Header-body'>
                <YoutubeBackground
                    videoId='KdURSnjeml0'
                    overlay="rgba(0,0,0,.4)">
                    <div className='Header-text-container'>
                        <div className='Header-test'>
                            <h1>Douglas MacKrell</h1>
                        </div>
                    </div>
                </YoutubeBackground>
            </div>
        )

    }
}

export default Header


