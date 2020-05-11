import React, { Component } from 'react';
import './App.css';
import ContentV from '@/components/ContentV';
import HomePage from '@/pages/home';

function App() {
	return (
		<div className='App'>
			<ContentV />
			<HomePage />
		</div>
	);
}

export default App;
