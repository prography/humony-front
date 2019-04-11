import React from 'react';
import './Main.scss';
import Home from './Home';

const Main: React.FC = () => {
    return (
        <div className="mainContainer">
            <div className="sectionWrap">
                <Home />
            </div>            
        </div>
    );
};

export default Main;