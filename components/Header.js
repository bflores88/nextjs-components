import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../components/Navigation/Toolbar';
import MobileNav from '../components/Navigation/MobileNavigation/MobileNavigation';

const Header = (props) => {
	const [openMobile, setOpenMobile] = useState(false);

	const closeHandler = () => {
		setOpenMobile(!openMobile);
	};

	return (
		<>
			<header className="header">
				<Toolbar toggleNav={closeHandler}>{props.children}</Toolbar>
				<MobileNav marginTop={props.marginTop} openMobile={openMobile} closeHandler={closeHandler}>
					<h1>Title</h1>
				</MobileNav>
			</header>
			<style jsx>{`
				.header {
					position: fixed;
					top: 0;
					left: 0;
					z-index: 100;
					overflow: hidden;
					width: 100%;
					height: 80px;
					background-color: ${props.backgroundColor};
				}

				@media (min-width: 572px) {
					.header {
						display: inline-block;
						height: ${props.height};
					}
				}
			`}</style>
		</>
	);
};

export default Header;

Header.propTypes = {
	height: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	marginTop: PropTypes.string.isRequired,
};
