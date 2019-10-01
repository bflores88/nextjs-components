import PropTypes from 'prop-types';
import NavItems from './NavigationItems/NavigationItems';
import MobileToggle from './MobileNavigation/MobileToggle/MobileToggle';

const toolbar = (props) => {
	const backgroundColor = 'transparent';

	return (
		<>
			<div className="toolbar">
				<MobileToggle toggleNav={props.toggleNav} />
				<div>{props.children}</div>
				<nav className="desktop">
					<NavItems />
				</nav>
			</div>
			<style jsx>{`
				.toolbar {
					height: 100%;
					width: 100%;
					background-color: ${backgroundColor};
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 20px;
					box-sizing: border-box;
					z-index: 90;
				}

				.toolbar nav {
					height: 100%;
				}

				@media (max-width: 576px) {
					.desktop {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

export default toolbar;

toolbar.propTypes = {
	toggleNav: PropTypes.func.isRequired,
};
