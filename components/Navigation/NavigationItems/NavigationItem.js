import Link from './ActiveClass';
import PropTypes from 'prop-types';

const navigationItem = (props) => {
	const linkColor = 'blue';
	const hoverAndActiveColor = 'pink';
	const hoverAndActiveBackgroundColor = 'transparent';
	const hoverAndActiveBottomBorderColor = 'blue';

	return (
		<>
			<li className="nav-item">
				<Link activeClassName="active" href={props.linkTo}>
					<a>{props.children}</a>
				</Link>
			</li>
			<style jsx>{`
				.nav-item {
					margin: 10px auto;
					height: 100%;
					box-sizing: border-box;
					display: block;
					width: 100%;
				}

				.nav-item a {
					color: ${linkColor};
					text-decoration: none;
					width: 100%;
					box-sizing: border-box;
					display: block;
				}

				.nav-item a:hover,
				.nav-item a:active,
				.nav-item a.active {
					color: ${hoverAndActiveColor};
				}

				@media (min-width: 576px) {
					.nav-item {
						margin: 0;
						display: flex;
						height: 100%;
						align-items: center;
						width: auto;
					}

					.nav-item a {
						color: white;
						height: 100%;
						padding: 16px 10px;
						border-bottom: 4px solid transparent;
					}

					.nav-item a:hover,
					.nav-item a:active,
					.nav-item a.active {
						background-color: ${hoverAndActiveBackgroundColor};
						border-bottom: 4px solid ${hoverAndActiveBottomBorderColor};
						color: white;
					}
				}
			`}</style>
		</>
	);
};

export default navigationItem;

navigationItem.propTypes = {
	linkTo: PropTypes.string.isRequired,
};
