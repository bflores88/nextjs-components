import PropTypes from 'prop-types';
import NavItems from '../NavigationItems/NavigationItems';

const mobileNav = (props) => {
	let currentClass = props.openMobile ? 'mobile-nav open' : 'mobile-nav close';

	console.log(props.openMobile);

	return (
		<>
			<div className={currentClass} onClick={props.closeHandler}>
				<div>{props.children}</div>
				<nav>
					<NavItems />
				</nav>
			</div>
			<style jsx>{`
				.mobile-nav {
					position: fixed;
					width: 100%;
					height: 100%;
					left: 0;
					top: ${props.marginTop};
					z-index: 200;
					background-color: white;
					padding: 32px 16px;
					box-sizing: border-box;
					transition: transform 0.3s ease-out;
					text-align: center;
				}

				@media (min-width: 576px) {
					.mobile-nav {
						display: none;
					}
				}

				.open {
					transform: translateY(0);
				}

				.close {
					z-index: 0;
					transform: translateY(-150%);
				}
			`}</style>
		</>
	);
};

export default mobileNav;

mobileNav.propTypes = {
	openMobile: PropTypes.bool.isRequired,
	closeHandler: PropTypes.func.isRequired,
	marginTop: PropTypes.string.isRequired,
};
