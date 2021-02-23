import { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { LottieHolder } from '../components/LottieHolder';
import { LanguageContext } from '../globalState';

//LOTTIES
import one_top from '../animations/servicios/consultoria.json';
import one_bottom from '../animations/servicios/01_b.json';
import one_m from '../animations/producto/02_m.json';
import two from '../animations/servicios/beneficios-1.json';
import two_b from '../animations/servicios/resultados-1.json';
import three from '../animations/servicios/especiales.json';
import benefits_2 from '../animations/servicios/beneficios-2.json';
import results_2 from '../animations/servicios/resultados-2.json';

// const AnimTopRight = styled.img`
// 	transform: translate(0, -25%);
// `;
// const AnimTopRight2 = styled.img`
// 	transform: translate(80px, -25%);
// `;

export default function Servicios({ data, error, message }) {
	const { lang } = useContext(LanguageContext);

	console.log(data);

	if (!error) {
		return (
			<>
				<Head>
					<title>{data['title_' + lang]}</title>
				</Head>
				<motion.main
					key="page-servicios"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="flex flex-wrap items-center justify-center mt-90 lg:mt-5 px-35 lg:px-0"
				>
					<div className="container mx-auto flex flex-wrap items-center justify-center px-0 md:px-35 lg:px-18">
						<section className="header w-full mt-4 flex items-stretch justify-center flex-wrap h-auto">
							<article className="w-full lg:w-8/12">
								<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
									{data['title_' + lang]}
								</h1>
								<div className="markdown-container-servicios">
									<ReactMarkdown plugins={[gfm]}>
										{data['subtitle_' + lang]}
									</ReactMarkdown>
								</div>
							</article>
							<article className="w-full lg:w-4/12 relative flex lg:mt-0 items-center justify-center">
								<div className="hidden lg:block">
									<LottieHolder animationData={one_top} />
								</div>
								{/* <div className="hidden lg:block transform scale-75 -mt-10">
								<LottieHolder animationData={one_bottom} />
							</div> */}
								<div className="max-w-md block lg:hidden my-10">
									<LottieHolder animationData={one_m} />
								</div>
							</article>
						</section>
						<section className="benefits w-full mt-1 flex items-stretch justify-center flex-wrap lg:mt-20">
							<article className="w-full lg:w-8/12 order-1 lg:order-2">
								<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
									{data['benefitsOne_' + lang]}
								</h2>
								<div className="simple-container text-black pl-0 lg:pl-20 mt-10 font-medium">
									<ReactMarkdown plugins={[gfm]}>
										{data['benefitsOneDescription_' + lang]}
									</ReactMarkdown>
								</div>
								<div className="w-full flex items-center justify-center">
									<img
										src="/animations/servicios-benefits-fake.svg"
										alt="Anim"
										className="block lg:hidden mt-10"
									/>
								</div>
								<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-10 lg:mt-20">
									{data['resultsOne_' + lang]}
								</h2>
								<div className="simple-container text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium">
									<ReactMarkdown plugins={[gfm]}>
										{data['resultsOneDescription_' + lang]}
									</ReactMarkdown>
								</div>
							</article>
							<article className="w-full lg:w-4/12 flex flex-col items-center justify-center order-2 lg:order-1">
								<div
									className="hidden lg:block"
									style={{ maxWidth: 250 }}
								>
									<LottieHolder animationData={two} />
									<LottieHolder animationData={two_b} />
								</div>
								<img
									src="/animations/servicios-resultados-fake.svg"
									alt="Anim"
									className="block lg:hidden mt-10"
									// width="250"
								/>
							</article>
						</section>
						<section className="price w-full mt-1 flex items-stretch justify-start flex-wrap mb-10">
							<article className="w-full flex items-center justify-center flex-wrap">
								<h2 className="text-2xl lg:text-3xl text-main font-bold mt-16 mb-10 w-full">
									{data['price_' + lang]}
								</h2>
								<div className="w-full lg:w-6/12 border-2 border-black py-8 flex flex-col items-center justify-center shadow-transparenta">
									<p className="font-bold text-black text-lg lg:text-xl xl:text-2xl w-full text-center">
										{data['priceContentTitle_' + lang]}
									</p>
									{/* <div className="max-w-md -mt-10 lg:w-full">
										<LottieHolder animationData={three} />
									</div> */}
									<img
										src="/servicios_precio_estatico.svg"
										alt="Servicios Precios"
										className="w-8/12 lg:w-full mt-6 mb-14"
									/>
									<p className="text-black -mt-9 w-full text-center text-lg lg:text-xl xl:text-2xl">
										{data['priceContentPrice_' + lang]}
									</p>
								</div>
							</article>
						</section>
						<section className="header w-full mt-0 lg:mt-16 flex items-stretch justify-center flex-wrap">
							<article className="w-full lg:w-8/12">
								<h2 className="text-4xl lg:text-5xl text-main font-bold w-full">
									{data['special_' + lang]}
								</h2>
								<div className="simple-container text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-20 font-medium">
									<ReactMarkdown plugins={[gfm]}>
										{data['specialDescription_' + lang]}
									</ReactMarkdown>
								</div>
							</article>
							<article className="w-full lg:w-4/12 relative flex items-center justify-center">
								<div className="hidden lg:block">
									{/* <LottieHolder animationData={one_top} /> */}
									<LottieHolder animationData={three} />
								</div>
								{/* <div className="hidden lg:block transform scale-75 -mt-10">
								<LottieHolder animationData={one_bottom} />
							</div> */}
								<div className="max-w-md block lg:hidden my-10">
									<LottieHolder animationData={one_m} />
								</div>
							</article>
						</section>
						<section className="benefits w-full mt-0 lg:mt-20 flex items-stretch justify-center flex-wrap">
							<article className="w-full lg:w-8/12 order-2">
								<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
									{data['benefitsOne_' + lang]}
								</h2>
								<div className="simple-container text-black pl-0 lg:pl-20 mt-10 font-medium">
									<ReactMarkdown plugins={[gfm]}>
										{data['benefitsOneDescription_' + lang]}
									</ReactMarkdown>
								</div>
								<div className="w-full flex items-center justify-center">
									<img
										src="/animations/servicios-benefits-fake.svg"
										alt="Anim"
										className="block lg:hidden mt-10"
									/>
								</div>
								<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-10 lg:mt-18">
									{data['resultsOne_' + lang]}
								</h2>
								<div className="simple-container text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium">
									<ReactMarkdown plugins={[gfm]}>
										{data['resultsOneDescription_' + lang]}
									</ReactMarkdown>
								</div>
							</article>
							<article className="w-full lg:w-4/12 flex flex-col items-center justify-center order-2 lg:order-1 mb-10 lg:mb-20">
								<div
									className="hidden lg:block"
									style={{ maxWidth: 250 }}
								>
									<LottieHolder animationData={benefits_2} />
									<LottieHolder animationData={results_2} />
								</div>
								<img
									src="/animations/servicios-resultados-fake.svg"
									alt="Anim"
									className="block lg:hidden mt-10"
									// width="250"
								/>
							</article>
						</section>
					</div>
				</motion.main>
			</>
		);
	} else {
		return (
			<motion.main
				key="page-servicios-error"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex flex-wrap items-center justify-center mt-90 lg:mt-5 px-35 lg:px-0"
			>
				<div className="container mx-auto flex flex-wrap items-center justify-center">
					<section className="header w-full mt-4 flex items-stretch justify-center flex-wrap h-auto">
						<article className="w-full lg:w-8/12 h-screen">
							<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
								{error}
							</h1>
							<div className="markdown-container-servicios">
								{message}
							</div>
						</article>
					</section>
				</div>
			</motion.main>
		);
	}
}

export async function getServerSideProps(context) {
	const data = await fetch(`${process.env.API_URL}/services`).then((res) =>
		res.json()
	);
	// const data = await fetch(`http://localhost:1337/services`).then((res) =>
	// 	res.json()
	// );
	if (data.statusCode === 500) {
		return {
			props: {
				error: 500,
				status: 500,
				message:
					'Parece que hay un error en el servidor. Por favor intente de nuevo más tarde.'
			}
		};
	}
	return {
		props: {
			data
		}
	};
}
