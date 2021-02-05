import { useEffect, useState } from 'react';
import { ContextProvider } from '../globalState/state';
import { AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import MainLayout from '../Layout';
import '../styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{/* <Head>
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
			</Head> */}
			<ContextProvider>
				<MainLayout>
					<AnimatePresence exitBeforeEnter>
						<Component
							{...pageProps}
							key={router.route}
							windowWidth={width}
						/>
					</AnimatePresence>
				</MainLayout>
			</ContextProvider>
		</>
	);
}

export default MyApp;
