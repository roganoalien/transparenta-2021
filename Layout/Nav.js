import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from '../components/ActiveLink';
import { TransparentaContext } from '../globalState';
import { AnimatePresence, motion } from 'framer-motion';
import { Formik } from 'formik';

const menuVariants = {
	init: {
		opacity: 0,
		y: '-100%'
	},
	anim: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeInOut'
		}
	},
	end: {
		opacity: 0,
		y: '-120%',
		transition: {
			ease: 'easeInOut'
		}
	}
};

function Nav() {
	const { transOpen, setTransOpen } = useContext(TransparentaContext);

	const handleTransparenta = () => {
		setTransOpen(!transOpen);
	};

	return (
		<>
			<nav className="w-full flex items-center justify-between py-35 px-16">
				<div className="mainLogo flex items-center justify-center w-1/4">
					<Link href="/">
						<a>
							<Image
								src="/transparenta-logo.svg"
								alt="Transparenta Logo"
								layout="intrinsic"
								width="350px"
								height="28.16px"
							/>
						</a>
					</Link>
				</div>
				<ul className="nav-items flex items-center justify-end w-3/4 text-black text-sm">
					<li className="font-bold uppercase mr-6 hover:text-main">
						<ActiveLink
							activeClassName="text-main"
							href="/proactiva"
						>
							<a>Transparencia proactiva</a>
						</ActiveLink>
					</li>
					<li className="font-bold uppercase mr-6 hover:text-main">
						<ActiveLink
							activeClassName="text-main"
							href="/producto"
						>
							<a>Producto</a>
						</ActiveLink>
					</li>
					<li className="font-bold uppercase mr-6 hover:text-main">
						<ActiveLink
							activeClassName="text-main"
							href="/servicios"
						>
							<a>Servicios</a>
						</ActiveLink>
					</li>
					<li
						onClick={handleTransparenta}
						className="font-bold uppercase py-2 px-4 bg-black text-white hover:bg-main hover:text-black cursor-pointer transparenta-btn-toblack shadow-none hover:shadow-transparentaSmall transition duration-200 ease-in-out"
					>
						Obtén Transparenta
					</li>
				</ul>
			</nav>
			<AnimatePresence exitBeforeEnter>
				{transOpen && (
					<motion.div
						key="contact-opened"
						initial="init"
						animate="anim"
						exit="end"
						variants={menuVariants}
						className="mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white flex items-center justify-start flex-col border-bottom-2 border-main overflow-y-auto px-10 pt-20"
					>
						<div
							className="close-transparenta absolute right-0 top-0 transform -translate-x-5 translate-y-5 cursor-pointer"
							onClick={handleTransparenta}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="none"
								stroke="#484d51"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								viewBox="0 0 32 32"
							>
								<path d="M2 30 L30 2 M30 30 L2 2" />
							</svg>
						</div>
						<div className="container mx-auto flex items-start justify-center">
							<div className="w-7/12">
								<h3 className="text-4xl text-main font-bold w-full text-left">
									Contacto
								</h3>
								<div className="px-16">
									<Formik
										validateOnChange={false}
										validateOnBlur={false}
										initialValues={{
											name: '',
											orgName: '',
											sector: '',
											services: '',
											email: '',
											text: ''
										}}
										validate={(values) => {
											const errors = {};
											if (!values.name) {
												errors.name =
													'Campo obligatorio';
											}
											if (!values.orgName) {
												errors.orgName =
													'Campo obligatorio';
											}
											if (!values.sector) {
												errors.sector =
													'Campo obligatorio';
											}
											if (!values.services) {
												errors.services =
													'Campo obligatorio';
											}
											if (!values.text) {
												errors.text =
													'Campo obligatorio';
											}
											if (!values.email) {
												errors.email =
													'Campo obligatorio';
											} else if (
												!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
													values.email
												)
											) {
												errors.email =
													'Correo inválido';
											}
											return errors;
										}}
										onSubmit={(
											values,
											{ setSubmitting, validate }
										) => {
											validate(values);
											// alert('enviando');
											setTimeout(() => {
												alert(
													JSON.stringify(
														values,
														null,
														2
													)
												);
												setSubmitting(false);
											}, 400);
										}}
									>
										{({
											values,
											errors,
											// touched,
											handleChange,
											handleBlur,
											handleSubmit
											// isSubmitting
										}) => (
											<form
												onSubmit={handleSubmit}
												className="w-full flex flex-col items-center justify-start pointer-events-auto pt-4 pb-10"
											>
												{errors.name && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.name}
													</p>
												)}
												<input
													type="text"
													name="name"
													onChange={handleChange}
													// onBlur={handleBlur}
													value={values.name}
													placeholder="Nombre *"
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black"
												/>
												{errors.orgName && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.orgName}
													</p>
												)}
												<input
													type="text"
													name="orgName"
													onChange={handleChange}
													// onBlur={handleBlur}
													value={values.orgName}
													placeholder="Nombre de la organización *"
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black"
												/>
												{errors.sector && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.sector}
													</p>
												)}
												{/* <input
													type="text"
													name="sector"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.sector}
													placeholder="Sector"
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black"
												/> */}
												<select
													name="sector"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.sector}
													style={{
														background:
															'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02eiIvPjwvc3ZnPg==)',
														backgroundPosition:
															'98% 70%',
														backgroundRepeat:
															'no-repeat',
														WebkitAppearance: 'none'
													}}
													className={`w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 ${
														values.sector !==
														'Sector *'
															? 'text-black'
															: 'text-gray-400'
													}`}
												>
													<option>Sector *</option>
													<option value="Público">
														Público
													</option>
													<option value="Privado">
														Privado
													</option>
													<option value="Social">
														Social
													</option>
												</select>
												{errors.email && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.email}
													</p>
												)}
												<input
													type="email"
													name="email"
													onChange={handleChange}
													// onBlur={handleBlur}
													value={values.email}
													placeholder="Correo *"
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black"
												/>
												{errors.services && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.services}
													</p>
												)}
												{/* <input
													type="text"
													name="services"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.services}
													placeholder="Servicios de interés"
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black"
												/> */}
												<textarea
													name="services"
													cols="30"
													rows="10"
													placeholder="Servicios de interés"
													onChange={handleChange}
													// onBlur={handleBlur}
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black max-h-20"
												>
													{values.services}
												</textarea>
												{errors.text && (
													<p className="text-red-500 text-xs uppercase text-left w-full">
														{errors.text}
													</p>
												)}
												<textarea
													name="text"
													cols="30"
													rows="10"
													placeholder="Cuéntanos más"
													className="w-full"
													onChange={handleChange}
													// onBlur={handleBlur}
													className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall placeholder-black"
												>
													{values.text}
												</textarea>
												<div className="btn-holder flex items-center justify-center w-full mt-10">
													<button
														type="submit"
														className="bg-black py-3 w-full text-center text-white font-bold after-shadow-outline"
													>
														Enviar
													</button>
												</div>
											</form>
										)}
									</Formik>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Nav;
