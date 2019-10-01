// import Fonts from '../general/Fonts';
import React from 'react';
import Hero from '../components/UI/Hero';
import Layout from '../components/Layout';
import SplitContainer from '../components/UI/Split/SplitContainer';
import Split from '../components/UI/Split/Split';

class Index extends React.Component {
	render() {
		return (
			<Layout>
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
				<SplitContainer reverseOnDesktop={false}>
					<Split splitSide="left" backgroundColor="#eee" isContentText={false}>
						<img
							src="https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
							alt="city"
							width="100%"
						/>
					</Split>
					<Split splitSide="right" isContentText={true} contentAlign="right">
						<h2>Lorem Ipsum</h2>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</Split>
				</SplitContainer>
			</Layout>
		);
	}
}

export default Index;
