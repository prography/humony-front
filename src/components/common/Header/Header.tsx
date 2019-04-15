import React, { Component } from 'react';
import './Header.scss';
import styled from 'styled-components';

interface Props {
    scrollTop: number
}

interface State {
    mobileOpen: boolean
}


class Header extends Component<Props, State> {
    state = {
        mobileOpen: false
    }

    handleClick = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    }

    render () {
        return (
            <header className={ this.props.scrollTop >= 100 ? 'header-fix' : ''}>
                <nav>
                    <div className="header-container">
                        <div className="logo">
                            <h1>
                                <a href="/">Picxy</a>
                            </h1>
                        </div>
                        <ul className={`gnb_list ${this.state.mobileOpen ? 'is_open' : ''}`}>
                            <li><a href="#">홈</a></li>
                            <li><a href="#">서비스 소개</a></li>
                            <li><a href="#">픽시 플러스</a></li>
                        </ul>
                        <div className={`mobile-menu ${this.state.mobileOpen ? 'is_open' : ''}`} onClick={this.handleClick}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;