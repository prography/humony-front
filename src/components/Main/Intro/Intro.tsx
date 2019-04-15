import React from 'react';
import './Intro.scss';
import Macbook from '../../../assets/images/macbook.png';

const Intro: React.FC = () => {
    return (
        <section id="intro">
            <div className="intro-wrap">
                <div className="main-title">
                    <h2><span className="color-main">PICXY</span> 서비스 소개</h2>
                    <p>포토샵, 일러스트로 자르기 힘든 사진을 쉽게 자를 수 있도록<br/>단 한번의 업로드로 사진을 분할하며, 원하는 부분만 클릭해서<br/>쉽게 다운로드 할 수 있습니다.<br/><br/></p>
                    <button className="startBtn"><span>START</span> 지금 바로 시작하기</button>  
                </div>
                <div className="image-wrap">
                    <img src={Macbook} alt="macbook" width="700" />
                </div>
                
            </div>
        </section>
    );
};

export default Intro;