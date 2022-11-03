import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentV from '@/components/ContentV';
import Map from '@/components/map';

class Home extends Component {
	render() {
		return (
			<div className="homePage">
				<Map />
			</div>
		);
	}
}

Home.propTypes = {};

export default Home;
