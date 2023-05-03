import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeInfo from '../components/Welcomeinfo';
import '../styles/global.scss';

const Welcome = () => {
	return (
		<section className="main-container">
            <Header/>
			<div className="Bottom">
				<WelcomeInfo/>
            </div>
            <Footer/>
		</section>
	);
}

export default Welcome;