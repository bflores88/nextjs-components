import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<>
			<header className="header">{props.children}</header>
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
};
