import { useEffect, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import ResNav from './ResNav';

const MainLayout = ({ children }) => {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{width > 1027 && <Nav />}
			{width < 1028 && <ResNav />}
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
