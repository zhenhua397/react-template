import React, { Component } from 'react';
import ContentV from '@/components/ContentV';
import Map from '@/components/map';

class Home extends Component {
	render() {
		return (
			<div className='homePage'>
				<ContentV />
				<Map />
			</div>
		);
	}
}

export default Home;
