import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
// import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LottieHolder } from '../components/LottieHolder';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { LanguageContext } from '../globalState';
// import Lottie from 'lottie-react';

// LOTTIES
// import one_right from '../animations/proactiva/01_tr.json';
import one_m from '../animations/proactiva/01_m.json'; // proactiva middle
// import one_left from '../animations/proactiva/01_tl.json';
import two from '../animations/proactiva/02_r.json'; // triangulo
import three from '../animations/proactiva/03_l.json';

export default function Proactiva({ data }) {
	const [width, setWidth] = useState(null);
	const { lang } = useContext(LanguageContext);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Head>
				<title>{data['title_' + lang]}</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="relative px-35 lg:px-0"
			>
				<div className="container mx-auto flex flex-wrap justify-center">
					<section className="header w-full lg:w-11/12 xl:w-10/12 mt-90x2 lg:mt-6 z-30">
						<h1 className="text-4xl lg:text-5xl text-main font-bold w-full lg:-ml-10">
							{data['title_' + lang]}
						</h1>
						<p className="text-black text-2xl lg:text-3xl mt-4 font-semibold lg:font-bold w-full">
							{data['subtitle_' + lang]}
						</p>
					</section>
					{/* <section className="middle-animations w-full flex items-center justify-between"> */}
					{/* <div
							className="hidden lg:block transform -translate-x-1/4"
							style={{ width: 290 }}
						>
							<LottieHolder animationData={one_left} />
						</div> */}
					{/* <div className="hidden lg:block transform translate-x-1/4 -translate-y-1/2">
							<LottieHolder animationData={one_right} />
						</div> */}
					{/* </section> */}
					<section className="footer w-full lg:w-10/12 mt-0 lg:mt-0 flex items-start justify-end">
						<div className="w-full lg:w-auto max-w-3xl lg:max-w-3xl xl:max-w-4xl">
							<LottieHolder animationData={one_m} />
						</div>
					</section>
					<section className="what w-full lg:w-10/12 mt-0 lg:mt-4 mb-0 lg:mb-10 flex items-center justify-center flex-wrap">
						<article className="w-full lg:w-8/12">
							<h2 className="text-2xl lg:text-3xl text-main font-bold">
								{data['what_' + lang]}
							</h2>
							<p className="text-black mt-4 lg:mt-8 w-full font-medium">
								{data['whatDescription_' + lang]}
							</p>
						</article>
						<article className="w-full lg:w-4/12 relative flex lg:block items-center justify-center mt-10 lg:mt-0">
							<div className="hidden lg:block transform scale-75">
								<LottieHolder animationData={two} />
							</div>
						</article>
					</section>
					<section className="benefits w-full mt-0 lg:mt-10 mb-10 lg:mb-14 flex items-start justify-center">
						<article className="w-full lg:w-4/12 relative hidden lg:flex items-center justify-center">
							<div className="" style={{ width: 320 }}>
								<LottieHolder animationData={three} />
							</div>
						</article>
						<article className="w-full lg:w-8/12">
							<h2 className="text-2xl lg:text-3xl text-main font-bold">
								{data['benefits_' + lang]}
							</h2>
							<div className="markdown-container">
								<ReactMarkdown plugins={[gfm]}>
									{data['benefitsDescription_' + lang]}
								</ReactMarkdown>
							</div>
						</article>
					</section>
				</div>
			</motion.main>
		</>
	);
}

export async function getServerSideProps(context) {
	const data = await fetch(`${process.env.API_URL}/proactiva`).then((res) =>
		res.json()
	);
	if (!data) {
		return {
			props: { error: 404, status: 500 }
		};
	}
	return {
		props: {
			data
		}
	};
}
