import React, { Component } from 'react';
import styled from 'styled-components';
import './Home.scss';
import * as api from '../../lib/api';
import swal from 'sweetalert';
import { IoIosCloudUpload as UploadIcon } from 'react-icons/io';
import Check from './selectList/Check';


interface CheckList {
	checked: boolean
	value: string
}
interface Props {
  
};

interface State {
	fileName: string
	formData: any
	sendYn: boolean
	segpicImage: string
	checkList: CheckList[]
};

class Home extends Component<Props, State> {
    state = {
			fileName: '',
			formData: '',
			sendYn: true,
			segpicImage: 'https://www.activemarketing.com/wp-content/uploads/2013/03/segmentation_map.svg_-1080x675.png',
			checkList: [
				{ checked: false, value: 'document 1' },
				{ checked: false, value: 'document 2' },
				{ checked: false, value: 'document 3' },
				{ checked: false, value: 'document 4' },
				{ checked: false, value: 'document 5' },
			]
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
            //const result = await api.sendImage(this.state.formData);
            this.setState({
								sendYn: true,
								segpicImage: 'https://www.activemarketing.com/wp-content/uploads/2013/03/segmentation_map.svg_-1080x675.png',
								checkList: [
									{ checked: false, value: 'document 1' },
									{ checked: false, value: 'document 2' },
									{ checked: false, value: 'document 3' },
									{ checked: false, value: 'document 4' },
									{ checked: false, value: 'document 5' },
								]
						});
						
            swal('업로드 성공', '이미지 업로드에 성공했습니다.', 'success');
        } catch {
            swal('업로드 실패','이미지 업로드에 실패했습니다.', 'error');
        }
		}
		
		handleCheck = (idx: any) => {
			return () => {
				console.log(1);
				const checkList = this.state.checkList;
				
				checkList[idx].checked = true;

				this.setState({
					checkList
				});

				console.log(this.state.checkList);
			}
			// console.log(e.target.checked);
			// console.dir(e.target);
		};

    render () {
			const { sendYn, segpicImage, fileName, checkList } = this.state;
			const color = ['사람', '강아지', '자동차', '나무'];

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
															sendYn 
															? 
															<div className="loading">
																	<div className="imgPreview">
																			<img src={segpicImage} alt="segpic"/>
																	</div>
																	<div className="colorlist">
																			<ul>
																				{
																					checkList.map((v: any, k: number) => (
																						<Check key={k} handleCheck={this.handleCheck(k)} opt={v.value} checked={v.checked} />
																					))
																				}
																					{/* <li className="colorList">
																						<label>
																							<span className={ `color-badge` }>사람</span>
																							<input type="checkbox"/>
																						</label>																							
																					</li>
																					<li className="colorList">
																						<label>
																							<span className={ `color-badge` }>강아지</span>
																							<input type="checkbox"/>
																						</label>																							
																					</li>
																					<li className="colorList">
																						<label>
																							<span className={ `color-badge` }>자동차</span>
																							<input type="checkbox"/>
																						</label>																							
																					</li>
																					<li className="colorList">
																						<label>
																							<span className={ `color-badge` }>나무</span>
																							<input type="checkbox"/>
																						</label>																							
																					</li> */}
																			</ul>
																	</div>
																	<p>다운받으실 영역을 선택해주세요.</p>
															</div>
															: 
															<div className="ub-bg">
																	<label htmlFor="imageInput">
																			<figure>
																					<UploadIcon className="upload-icon" />
																			</figure>
																			{
																					fileName ? <span>{fileName}</span> : <span>이미지 파일을 선택해주세요 <br/><span className="ext">JPG, JPGEG, PNG</span></span>
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