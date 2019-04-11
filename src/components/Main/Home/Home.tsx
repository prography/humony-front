import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <section id="home">
            <div className="uploadBox">
                <h2>파일 업로드</h2>
                <form>
                    <input type="file" name="" id="" />
                    <input type="submit" />
                </form>
            </div>
            <div className="titleInfo">
                <h3>사진을 쉽고 빠르게 자르자! <br/>윤대영쌤의 딥러닝과 함께하는<br/>재미있는 누끼따기</h3>
                <button className="startBtn"><span>START</span> 지금 바로 시작하기</button>  
            </div>
        </section>
    );
};

export default Home;