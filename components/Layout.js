import Header from './Header';

const headerHeight = '80px';

const layoutStyle = {
	margin: 0,
	marginTop: headerHeight,
	width: '100%',
};

const Layout = (props) => (
	<>
		<Header marginTop={headerHeight} backgroundColor="#ccc" height={headerHeight}>
			This is the header.
		</Header>
		<div style={layoutStyle}>{props.children}</div>
	</>
);

export default Layout;
