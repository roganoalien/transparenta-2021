import { ContextProvider } from '../globalState/state';
import { AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import MainLayout from '../Layout';
import '../styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<ContextProvider>
			<MainLayout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</MainLayout>
		</ContextProvider>
	);
}

export default MyApp;
