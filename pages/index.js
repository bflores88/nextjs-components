// import Fonts from '../general/Fonts';
import React from 'react';
import Hero from '../components/UI/Hero';

class Index extends React.Component {
	render() {
		return (
			<>
				<h1>Heebo 700</h1>
				<h2>Heebo 500</h2>
				<h3>Heebo 400</h3>
				<Hero
					imgUrl="https://images.unsplash.com/photo-1441639087627-2b18e64870a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id."
					align="center"
					fontSize="36px"
					// top="50%"
					// left="65%"
					// width="60%"
				/>
				<style jsx global>{`
					html {
						box-sizing: border-box;
					}

					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}

					body {
						font-family: 'heebo', 'Arial';
						margin: 0;
					}

					h1 {
						font-weight: 700;
					}

					h2 {
						font-weight: 500;
					}

					h3 {
						font-weight: 400;
     }
     
     
				`}</style>
			</>
		);
	}
}

export default Index;
