import React from 'react';
import './Header.scss';
import styled from 'styled-components';

interface Props {
    scrollTop: number
}

const Header: React.FC<Props> = ({ scrollTop }) => {
    return (
        <header className={ scrollTop >= 100 ? 'header-fix' : ''}>
            <nav>
                <div className="header-container">
                    <div className="logo">
                        <h1>
                            <a href="/">Picxy</a>
                        </h1>
                    </div>
                    <ul className="gnb_list">
                        <li><a href="#">홈</a></li>
                        <li><a href="#">서비스 소개</a></li>
                        <li><a href="#">픽시 플러스</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;