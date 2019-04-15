import React, { Component } from 'react';
import './Home.scss';
//import console = require('console');


interface Props {
    
};

interface State {
    selectedFile: string
};

class Home extends Component<Props, State> {
    state = {
        selectedFile: ''
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: any = e.target.files;
   
        if (file.length) {
            this.setState({
                selectedFile: file[0].name
            });
        }
        
    }

    render () {
        return (
            <section id="home">
                <div className="home-wrap">
                    <div className="uploadBox">
                        <h2>파일 업로드</h2>
                        <form>
                            <div className="filebox">
                                <label htmlFor="ex_file">
                                    파일을 선택해 주세요
                                </label>
                                <input type="file" onChange={this.handleChange} id="ex_file" />
                            </div>
                            <p className="fileName">{this.state.selectedFile}</p>
                        </form>
                    </div>
                    <div className="titleInfo">
                        <h3><span className="title-concept">사진을 쉽고 빠르게 자르자!</span> <br/>윤대영쌤의 딥러닝과 함께하는<br/>재미있는 누끼따기</h3>
                        <button className="startBtn"><span>START</span> 지금 바로 시작하기</button>  
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;