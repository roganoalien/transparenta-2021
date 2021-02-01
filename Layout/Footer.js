import { useContext } from 'react';
import Image from 'next/image';
import { TransparentaContext, LanguageContext } from '../globalState';
import styled from 'styled-components';

const Transparenta = styled.button`
	box-shadow: 15px 15px 0 0 rgba(72, 77, 81, 1);
	&:hover {
		box-shadow: 0 0 0 0 rgba(72, 77, 81, 1);
	}
`;

function Footer() {
	const { transOpen, setTransOpen } = useContext(TransparentaContext);
	const { lang, setEnglish, setSpanish } = useContext(LanguageContext);

	const handleTransparenta = () => {
		setTransOpen(!transOpen);
	};

	const changeLanguage = async (which) => {
		if (which === 'es') {
			await setSpanish();
		} else {
			await setEnglish();
		}
	};

	const refresh = () => {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		// window.location.reload();
	};

	return (
		<>
			<section className="container mx-auto transparenta-btn flex items-center justify-center mb-20 lg:mb-36">
				<button
					onClick={handleTransparenta}
					className="text-black text-2xl lg:text-4xl font-bold border-2 border-black py-2 lg:py-4 px-10 transition duration-200 transform scale-100 hover:scale-95 shadow-transparenta hover:shadow-none"
				>
					Obtén Transparenta
				</button>
			</section>
			<footer className="w-full flex items-start justify-center flex-wrap bg-main py-12 px-10 lg:px-20">
				<div className="w-full lg:w-1/3 flex flex-col items-center justify-start">
					<div className="w-full lg:w-auto mb-10 lg:mb-0">
						<h4 className="font-bold text-white text-lg text-left">
							Contacto
						</h4>
						<ul className="text-white mt-3">
							<li>
								<a
									href="mailto:contacto@transparenta.mx"
									className="font-light hover:underline"
								>
									contacto@transparenta.mx
								</a>
							</li>
							<li>
								<a
									href="tel:+525544665577"
									className="font-light hover:underline"
								>
									55 4466 5577
								</a>
							</li>
							<li className="font-light">
								Moliere 310, Polanco II, 11550, CDMX
							</li>
						</ul>
					</div>
				</div>
				<ul className="w-full lg:w-1/3 flex items-center justify-start lg:justify-center self-stretch mb-10 lg:mb-0">
					<li className="mr-4">
						<a
							href="#instagram"
							className="border-2 border-white flex items-center p-2 hover:opacity-50"
						>
							<Image
								src="/instagram.svg"
								alt="Instagram"
								layout="intrinsic"
								height="18px"
								width="18px"
							/>
						</a>
					</li>
					<li className="mr-4">
						<a
							href="#twitter"
							className="border-2 border-white flex items-center p-2 hover:opacity-50"
						>
							<Image
								src="/twitter.svg"
								alt="Twitter"
								layout="intrinsic"
								height="18px"
								width="18px"
							/>
						</a>
					</li>
					<li>
						<a
							href="#facebook"
							className="border-2 border-white flex items-center p-2 hover:opacity-50"
						>
							<Image
								src="/facebook.svg"
								alt="Facebook"
								layout="intrinsic"
								height="18px"
								width="18px"
							/>
						</a>
					</li>
				</ul>
				<div className="w-full lg:w-1/3 flex items-center justify-start lg:justify-center">
					<div className="w-auto h-full">
						<h4 className="font-bold text-white text-lg mb-4">
							Idioma
						</h4>
						<div className="btns-holder flex items-center justify-start">
							<button
								onClick={async () => {
									// lang === 'es' ? null : changeLanguage('es');
									await changeLanguage('es');
									refresh();
								}}
								className={`${
									lang === 'es'
										? 'bg-white text-main'
										: 'bg-transparent hover:bg-white text-white hover:text-main transform scale-100 hover:scale-95'
								} border-2 border-white py-1 px-2 mr-4`}
							>
								Español
							</button>
							<button
								onClick={() => {
									// lang === 'en' ? null : changeLanguage('en');
									window.scroll({
										top: 0,
										left: 0,
										behavior: 'smooth'
									});
									// refresh();
									setTimeout(function () {
										changeLanguage('en');
									}, 250);
								}}
								className={`${
									lang === 'en'
										? 'bg-white text-main'
										: 'bg-transparent hover:bg-white text-white hover:text-main transform scale-100 hover:scale-95'
								} border-2 border-white py-1 px-2 mr-4`}
							>
								English
							</button>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
