import NavItem from './NavigationItem';

const navigationItems = (props) => (
	<>
		<div className="nav">
			<ul className="nav-items">
				<NavItem linkTo="/">Home</NavItem>
				<NavItem linkTo="/about">About</NavItem>
			</ul>
		</div>
		<style jsx>{`
			.nav {
				height: 100%;
				display: flex;
			}

			.nav-items {
				margin: auto;
				padding: 0;
				list-style: none;
				display: flex;
				flex-flow: column;
				align-items: center;
			}

			@media (min-width: 576px) {
				.nav {
					flex-direction: column;
					justify-content: flex-end;
				}
				.nav-items {
					margin: 0;
					flex-flow: row;
				}
			}
		`}</style>
	</>
);

export default navigationItems;
