import React from 'react';
import './Main.scss';
import Home from './Home';
import Intro from './Intro';

const Main: React.FC = () => {
    return (
        <div className="mainContainer">
            <div className="sectionWrap">
                <Home />
                <Intro />
            </div>            
        </div>
    );
};

export default Main;