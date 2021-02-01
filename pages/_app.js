import { useEffect, useState } from 'react';
import { ContextProvider } from '../globalState/state';
import { AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import MainLayout from '../Layout';
import '../styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps, router }) {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
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
	);
}

export default MyApp;
