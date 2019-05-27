import React, { Component } from 'react';
import styled from 'styled-components';
import './Home.scss';
import * as api from '../../lib/api';
import swal from 'sweetalert';
import { IoIosCloudUpload as UploadIcon } from 'react-icons/io';

interface Props {
    
};

interface State {
    fileName: string
    formData: any
    sendYn: boolean
};

class Home extends Component<Props, State> {
    state = {
        fileName: '',
        formData: '',
        sendYn: true,
    };

    handleChange = (e: any) => {
        try  {
            const files: any = Array.from(e.target.files);

            // 파일 선택 취소하면 return false
            if (!files || !files.length) {
                return false;
            } 

            const formData = new FormData();
            const fileType = files[0].type.split('/')[0];

            if (fileType !== 'image') {
                throw Error('FILE_TYPE_ERROR');
            }

            files.forEach((file: any, i: any) => {
                formData.append('before', file); 
            });

            if (files.length) {
                this.setState({
                    fileName: files[0].name,
                    formData: formData
                });
            }
        } catch (error) {
            switch (error.message) {
                case 'FILE_TYPE_ERROR':
                    swal('업로드 실패','이미지만 업로드 할 수 있습니다.', 'error');
                    break;
            }
        }
    }

    handleUpload = async () => {
        if (!this.state.formData) {
            swal('파일을 선택해 주세요', '', 'warning');
            return false;
        }

        try {
            //await api.sendImage(this.state.formData);
            this.setState({
                sendYn: true
            });
            swal('업로드 성공', '이미지 업로드에 성공했습니다.', 'success');
        } catch {
            swal('업로드 실패','이미지 업로드에 실패했습니다.', 'error');
        }
    }

    render () {
        return (
            <div id="home">
                <section className="main-banner">
                    <div className="main-content">
                        <div className="main-container">
                            <div className="main-title-info">
                                <h2>사진을 10초만에 자르기<br/>픽시와 함께라면 가능합니다.</h2>
                                <p>지금 바로 시작해보세요!</p>
                            </div>
                            <div className="upload-box">
                                {
                                    this.state.sendYn 
                                        ? 
                                        <div className="segList">
                                            <ul>
                                                <li>
                                                    <div></div>
                                                </li>
                                                <li>
                                                    <div></div>
                                                </li>
                                                <li>
                                                    <div></div>
                                                </li>
                                                <li>
                                                    <div></div>
                                                </li>
                                                <li>
                                                    <div></div>
                                                </li>
                                                <li>
                                                    <div></div>
                                                </li>
                                            </ul>
                                            <div className="buttonForm">
                                                <button>이미지 선택 완료</button>
                                            </div>
                                        </div>
                                        : 
                                        <div className="ub-bg">
                                            <label htmlFor="imageInput">
                                                <figure>
                                                    <UploadIcon className="upload-icon" />
                                                </figure>
                                                {
                                                    this.state.fileName ? <span>{this.state.fileName}</span> : <span>이미지 파일을 선택해주세요 <br/><span className="ext">JPG, JPGEG, PNG</span></span>
                                                }
                                            </label>
                                            <input type="file" id="imageInput" onChange={this.handleChange} accept="image/png, image/jpeg" />
                                            <button type="button" onClick={this.handleUpload}>전송하기</button>
                                        </div>  
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;