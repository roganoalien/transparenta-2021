import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es, ES">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color="#89a4a9"
					/>
					<meta name="msapplication-TileColor" content="#f2f2f2" />
					<meta name="theme-color" content="#f2f2f2" />

					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="bg-white text-black overflow-x-hidden w-screen">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
