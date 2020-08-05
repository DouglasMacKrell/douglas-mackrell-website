import React from 'react'
import DougPuzz from './doug-puzzled.png';
import FZFText from './doug-404.png';

import './FourZeroFour.css';

const FourZeroFour = () => {
    return (
        <div className="fourzerofour">
            <div className="fourzerofour__main-container">
                <img className="fzf-text" src={FZFText} alt="404 Page Not Found" />
                <img className="doug-puzz" src={DougPuzz} alt="Douglas Puzzled Over This 404" />
            </div>
        </div>
    )
}

export default FourZeroFour
