import { AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import MainLayout from '../Layout';
import '../styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<MainLayout>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</MainLayout>
	);
}

export default MyApp;
