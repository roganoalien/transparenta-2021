import { AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import MainLayout from '../Layout';
import '../styles/globals.css';

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
