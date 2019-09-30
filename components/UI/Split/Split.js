import PropTypes from 'prop-types';

const split = (props) => {
	const splitClass = 'split '.concat(props.splitSide);
	const bgColor = props.backgroundColor ? props.backgroundColor : 'white';
	const textAlign = props.contentAlign ? props.contentAlign : 'center';

	return (
		<>
			<div className={splitClass}>
				<div className="centered">{props.children}</div>
			</div>
			<style jsx>{`
				.split {
					height: ${props.isContentText ? props.splitHeight : 'auto'};
					width: 100%;
					padding: ${props.isContentText ? '30px 15px 50px 15px' : '0px'};
				}

				@media (min-width: 576px) {
					.split {
						height: ${props.splitHeight ? props.splitHeight : '500px'};
						width: 50%;
						position: relative;
						z-index: 1;
						top: 0;
						overflow-x: hidden;
						padding-top: 20px;
					}

					.left {
						left: 0;
						background-color: ${bgColor};
					}

					.right {
						right: 0;
						background-color: ${bgColor};
					}

					.centered {
						width: 90%;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						text-align: ${textAlign};
					}
				}
			`}</style>
		</>
	);
};

export default split;

split.propTypes = {
	// split side "left" or "right"
	splitSide: PropTypes.string.isRequired,
	contentAlign: PropTypes.string,
	backgroundColor: PropTypes.string,
	splitHeight: PropTypes.string,
	isContentText: PropTypes.bool.isRequired,
};
