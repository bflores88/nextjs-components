import PropTypes from 'prop-types';

const mobileToggle = (props) => {
	return (
		<>
			<div onClick={props.toggleNav} className="mobile-toggle">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<style jsx>{`
				.mobile-toggle {
					width: 50px;
					height: 100%;
					display: flex;
					flex-flow: column;
					justify-content: space-around;
					align-items: center;
					padding: 20px 0;
					box-sizing: border-box;
					cursor: pointer;
				}

				.mobile-toggle div {
					width: 90%;
					height: 4px;
					background-color: white;
				}

				@media (min-width: 576px) {
					.mobile-toggle {
						display: none;
					}
				}
			`}</style>
		</>
	);
};

export default mobileToggle;

mobileToggle.propTypes = {
	toggleNav: PropTypes.func.isRequired,
};
