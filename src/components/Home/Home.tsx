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
	color: string
}

interface Props {};

interface State {
	fileName: string
	formData: any
	sendYn: boolean
	segpicImage: string
	checkList: CheckList[]
	loading: boolean
};

class Home extends Component<Props, State> {
	state = {
		fileName: '',
		formData: '',
		sendYn: false,
		segpicImage: '',
		checkList: [],
		loading: false,
	};

	handleChange = (e: any) => {
		const files: any = Array.from(e.target.files);

		// 파일 선택 취소하면 return false
		if (!files || !files.length) {
			return false;
		}

		const formData = new FormData();

		files.forEach((file: any, i: any) => {
			formData.append('before', file);
		});

		if (files.length) {
			this.setState({
				fileName: files[0].name,
				formData: formData
			});
		}
	}

	handleUpload = async () => {
		if (!this.state.formData) {
			swal('파일을 선택해 주세요', '', 'warning');

			return false;
		}

		try {
			this.setState({
				loading: true
			});
			//const result = await api.sendImage(this.state.formData);

			const result = {
				segpic_url: 'https://www.activemarketing.com/wp-content/uploads/2013/03/segmentation_map.svg_-1080x675.png',
				opt: [
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
					{ checked: false, color: '#e74c3c', value: 'Document1' },
				]
			};

			setTimeout(() => {
				this.setState({
					loading: false,
					sendYn: true,
					segpicImage: result.segpic_url,
					checkList: result.opt
				});

				swal('업로드 성공', '이미지 업로드에 성공했습니다.', 'success');
			}, 2000)

			

			
		} catch {
			swal('업로드 실패', '이미지 업로드에 실패했습니다.', 'error');
		}
	}

	handleCheck = (idx: any) => {
		return () => {
			console.log(1);
			const checkList: CheckList[] = this.state.checkList;

			if (checkList[idx]) {
				checkList[idx].checked = true;
			}

			this.setState({
				checkList
			});
		}
	};

	download = () => {
		const downList = this.state.checkList.filter((o: CheckList) => {
			return o.checked;
		});

		console.log(downList);
	};

	render() {
		const { sendYn, segpicImage, fileName, checkList, loading } = this.state;

		return (
			<div id="home">
				<section className="main-banner">
					<div className="main-container">
						<div className="main-title-info">
							<h2>사진을 10초만에 자르기<br />픽시와 함께라면 가능합니다.</h2>
							<p>지금 바로 시작해보세요!</p>
						</div>
					</div>
				</section>
				<section className="main-content">
					<div className="main-content">
						<div className="main-container">
							<div className="upload-box">
								{
									loading ? 
									<div className="loadingCover">
										<p>Loading...</p>
									</div> : ''
								}
								{
									sendYn ?
									<div className="loading">
										<p>다운받으실 영역을 선택해주세요.</p>
										<div className="imgPreview">
											<img src={segpicImage} alt="segpic" />
										</div>
										<div className="colorlist">
											<ul>
												{
													checkList.map((v: any, k: number) => (
														<Check key={k} handleCheck={this.handleCheck(k)} opt={v.value} checked={v.checked} />
													))
												}
												</ul>
											</div>
											<button type="button" className="m_btn" onClick={this.download} >다운로드</button>
										</div>
										:
										<div className="ub-bg">
											<label htmlFor="imageInput">
												<figure>
													<UploadIcon className="upload-icon" />
												</figure>
												{
													fileName ? <span>{fileName}</span> : <span>이미지 파일을 선택해주세요 <br /><span className="ext">JPG, JPGEG, PNG</span></span>
												}
											</label>
											<input type="file" id="imageInput" onChange={this.handleChange} accept="image/png, image/jpeg" />
											<button type="button" className="m_btn" onClick={this.handleUpload}>전송하기</button>
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