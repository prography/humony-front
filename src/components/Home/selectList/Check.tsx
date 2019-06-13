import React, { Component } from 'react';

interface Props {
	handleCheck: any
	opt: string
	checked: boolean
}

interface State {}

class Check extends Component<Props, State> {
	shouldComponentUpdate (nextProps: any, nextState: any): any {
		return this.props.checked !== nextProps.checked;
	}
	render () {
		return (
			<li className="colorList">
				<label>
					<span className={ `color-badge` }>{this.props.opt}</span>
					<input type="checkbox" onChange={this.props.handleCheck} name={this.props.opt} />
				</label>																							
			</li>
		);
	}
};

export default Check;