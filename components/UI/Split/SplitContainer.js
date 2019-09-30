import PropTypes from 'prop-types';

const splitContainer = (props) => {
	let desktopFlexDirection = props.reverseOnDesktop ? 'row-reverse' : 'row';

	return (
		<>
			<div className="split-container">{props.children}</div>
			<style jsx>{`
				.split-container {
					width: 100%;
					display: flex;
					flex-direction: column;
				}

				@media (min-width: 576px) {
					.split-container {
						flex-direction: ${desktopFlexDirection};
					}
				}
			`}</style>
		</>
	);
};

export default splitContainer;

splitContainer.propTypes = {
	reverseOnDesktop: PropTypes.bool.isRequired,
};
