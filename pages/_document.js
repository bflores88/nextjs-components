import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<style jsx global>{`
					html {
						box-sizing: border-box;
					}

					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}

					body {
						font-family: 'heebo', 'Arial';
						margin: 0;
					}

					h1 {
						font-weight: 700;
					}

					h2 {
						font-weight: 500;
					}

					h3 {
						font-weight: 400;
					}
				`}</style>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
