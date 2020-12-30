import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const data = [
	{
		client: 'Fideicomiso Fuerza México',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a magni dolorum voluptates repellendus blanditiis molestias incidunt aut, corrupti, porro possimus ut alias accusamus sit molestiae at, expedita sapiente dicta!',
		img:
			'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
		name: 'Ximena Suárez'
	},
	{
		client: 'Río Arronte',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam soluta assumenda facilis voluptates ex esse quae.',
		img: 'https://randomuser.me/api/portraits/men/36.jpg',
		name: 'Rodrigo García'
	},
	{
		client: 'ALEATICA',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam.',
		img: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'John Doe'
	},
	{
		client: 'Desarrollador Confiable',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		img:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
		name: 'Mary Jane'
	}
];

const NecesidadSection = styled.article`
	height: calc(100vh - 106px);
`;

const AniTopRight = styled.img`
	transform: translateX(15%);
`;
const AniBottomRight = styled.img`
	transform: translate(-50%, 50%);
`;
const AniTopLeft = styled.img`
	transform: translate(80px, 80px);
`;
const AniBottomLeft = styled.img`
	transform: translate(300%, 80px);
`;
const JaLeft = styled.img`
	transform: translate(-2px, -50%);
`;
const JaRight = styled.img`
	transform: translate(-50%, -50%);
`;

const FaceHolder = styled.div`
	background-size: cover !important;
	background-repeat: no-repeat !important;
	height: 250px;
	width: 190px;
`;
const FaceImage = styled.img`
	height: 200px;
	width: 100%;
	z-index: -1;
`;
const FaceLines = styled.img`
	height: 50px;
	width: 100%;
`;
const FaceCircles = styled.img`
	transform: translate(55%, -55%);
	z-index: 10;
`;
const PeopleBtnHolder = styled.div`
	bottom: 0px;
	right: 60px;
	position: absolute;
`;
const BtnShadow = styled.button`
	background: #f2f2f2;
	outline: none !important;
	position: relative;
	&:after {
		content: '';
		background: #484d51;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		transform: translate(6px, 6px);
		transition: all 0.15s ease-in-out;
		width: 100%;
		z-index: -1;
	}
	&:hover {
		&:after {
			transform: translate(4px, 4px);
		}
	}
`;

export default function Home() {
	const [position, setPosition] = useState(0);

	const changeClient = (up) => {
		if (up) {
			if (position + 1 < data.length) {
				setPosition(position + 1);
			} else {
				setPosition(0);
			}
		} else {
			if (position !== 0) {
				setPosition(position - 1);
			} else {
				setPosition(data.length - 1);
			}
		}
	};
	return (
		<>
			<Head>
				<title>Transparenta</title>
			</Head>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="necesidad-section w-screen relative"
			>
				<AniTopRight
					src="/animations/animation-right-top.svg"
					alt="Fake animation"
					className="top-0 right-0 absolute"
					width="600"
				/>
				<AniBottomRight
					src="/animations/animation-right-bottom.svg"
					alt="Fake animation"
					className="bottom-0 right-0 absolute"
					width="250"
				/>
				<AniTopLeft
					src="/animations/animation-left-top.svg"
					alt="Fake animation"
					className="top-0 left-0 absolute"
					width="200"
				/>
				<AniBottomLeft
					src="/animations/animation-left-bottom.svg"
					alt="Fake animation"
					className="bottom-0 left-0 absolute"
					width="100"
				/>
				<NecesidadSection className="container mx-auto h-screen flex flex-col items-center justify-center">
					<h1 className="text-xl md:text-3xl lg:text-5xl text-main font-bold w-full md:w-10/12  lg:w-6/12">
						Una necesidad actual
					</h1>
					<p className="text-black text-lg md:text-xl lg:text-3xl mt-4 font-bold w-full md:w-10/12  lg:w-6/12">
						Comunica de manera innovadora e inteligente los datos
						que más le importan a tu comunidad.{' '}
					</p>
				</NecesidadSection>
			</motion.section>
			<section className="about-section w-screen container mx-auto min-h-screen flex items-start justify-center pt-56 pb-20">
				<article className="section-container w-full  md:w-10/12 flex flex-wrap items-start justify-center">
					<div className="left-side w-full md:w-6/12">
						<h2 className="text-xl lg:text-3xl font-bold text-main">
							Lo que hacemos
						</h2>
						<p className="text-black mt-8 pr-10">
							Construimos plataformas de transparencia que buscan
							abrir las líneas de comunicación entre
							organizaciones de todo tipo y comunidad, a través de
							herramientas sistematizadas de visualización y
							consultorías de transparencia ajustadas a la
							operación de las organizaciones.
						</p>
						<h2 className="text-xl lg:text-3xl font-bold text-main mt-28">
							¿Por qué Transparenta?
						</h2>
						<p className="text-black mt-8 pr-10">
							Generar un entorno de confianza alrededor del acceso
							y divulgación de la información. Buscamos ayudar a
							nuestros clientes a ofrecer mayor certeza y
							seguridad a sus inversionistas, stakeholders,
							beneficiarios, donadores, clientes o cualquier
							persona involucrada con su organización,
							identificando los datos más valiosos para estos
							grupos y transparentándolos con el contexto
							adecuado.
						</p>
					</div>
					<div className="right-side w-full md:w-6/12 px-10 pt-16">
						<img
							className="mb-10"
							src="/images/about-one.svg"
							alt="About 1"
						/>
						<img
							className="mb-10"
							src="/images/about-two.svg"
							alt="About 2"
						/>
						<img src="/images/about-three.svg" alt="About 3" />
					</div>
				</article>
			</section>
			<section className="just-animations relative h-52">
				<JaLeft
					src="/animations/jaleft.svg"
					alt="Fake animation"
					className="top-1/2 left-0 absolute"
					width="600"
				/>
				<JaRight
					src="/animations/jaright.svg"
					alt="Fake animation"
					className="top-1/2 right-0 absolute"
					width="100"
				/>
			</section>
			<section className="clients w-screen container mx-auto flex flex-wrap items-center justify-center pt-20 pb-10">
				<h2 className="text-xl lg:text-3xl font-bold text-main w-full">
					Clientes
				</h2>
				<div className="the-clients flex items-center justify-center w-full">
					<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
						<img src="/clients/cliente-1.png" alt="Cliente 01" />
					</div>
					<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
						<img src="/clients/cliente-2.png" alt="Cliente 02" />
					</div>
					<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
						<img src="/clients/cliente-3.png" alt="Cliente 03" />
					</div>
					<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
						<img src="/clients/cliente-4.png" alt="Cliente 04" />
					</div>
				</div>
			</section>
			<section className="people w-screen container mx-auto flex items-center justify-center pb-40">
				<article className="w-full md:w-10/12 lg:w-9/12 flex items-stretch justify-center">
					<div className="w-full md:w-6/12 flex flex-col items-start justify-start relative">
						<h3 className="text-black font-bold text-xl">
							{data[position].name}
						</h3>
						<p className="text-main font-bold text-sm">
							{data[position].client}
						</p>
						<p className="text-black mt-5 italic pr-16">
							"{data[position].description}"
						</p>
						<PeopleBtnHolder className="switchClients flex items-center justify-center">
							<BtnShadow
								onClick={() => changeClient(false)}
								className="border-2 border-black py-1 px-2 mr-4 bg-white hover:bg-main"
							>
								<img
									src="/arrow-l.svg"
									alt="Arrow Left"
									width="8"
								/>
							</BtnShadow>
							<BtnShadow
								onClick={() => changeClient(true)}
								className="border-2 border-black py-1 px-2 bg-white hover:bg-main transition duration-150 ease-in-out"
							>
								<img
									src="/arrow-r.svg"
									alt="Arrow Right"
									width="8"
								/>
							</BtnShadow>
						</PeopleBtnHolder>
					</div>
					<div className="w-full md:w-6/12 pl-10 pt-14">
						<FaceHolder className="relative">
							<FaceCircles
								src="/animations/client-circle.svg"
								alt="Face Circle"
							/>
							<FaceImage
								className="object-cover left-0 top-0 absolute border-2 border-black"
								src={data[position].img}
								alt="Nombre persona"
							/>
							<FaceLines
								className="absolute left-0 bottom-0 border-l-2 border-r-2 border-b-2 border-black object-cover"
								src="/animations/client-lines.svg"
								alt="Lines"
							/>
						</FaceHolder>
					</div>
				</article>
			</section>
		</>
	);
}
