import { useState, useContext } from 'react';
import Image from 'next/image';
import ActiveLink from '../components/ActiveLink';
import { TransparentaContext, LanguageContext } from '../globalState';
import { AnimatePresence, motion } from 'framer-motion';
import { Formik } from 'formik';

const noScroll = require('no-scroll');

const iconVariants = {
	one: {
		rotate: -90,
		opacity: 0
	},
	two: {
		rotate: 0,
		opacity: 1
		// transition: {
		// 	ease: 'linear'
		// }
	},
	zero: {
		rotate: 90,
		opacity: 0
		// transition: {
		// 	ease: 'linear'
		// }
	}
};

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

function ResNav() {
	const { transOpen, setTransOpen } = useContext(TransparentaContext);
	const [open, setOpen] = useState(false);
	const { lang } = useContext(LanguageContext);
	// const [contact, setContact] = useState(false);

	const handleMenu = (isInside) => {
		setTimeout(
			function () {
				noScroll.toggle();
				setOpen(!open);
			},
			isInside ? 0 : 0
		);
	};

	const handleContact = () => {
		if (transOpen) {
			noScroll.off();
		} else {
			noScroll.on();
		}
		// setContact(!contact);
		setTransOpen(!transOpen);
	};

	return (
		<>
			<nav className="w-full flex items-center justify-between px-35 py-20px z-50 fixed left-0 top-0 bg-white">
				<div className="mainLogo flex items-center justify-center w-auto">
					<Image
						src="/visibia.png"
						alt="Transparenta Logo"
						layout="intrinsic"
						width="110"
						height="17px"
					/>
				</div>
				<button
					className="bg-gray-100 outline-none focus:outline-none"
					onClick={() =>
						open
							? handleMenu(false)
							: transOpen
							? handleContact()
							: handleMenu()
					}
					style={{
						outline: 'none !important'
					}}
				>
					<AnimatePresence exitBeforeEnter>
						{open || transOpen ? (
							<motion.div
								key="isOpen-menu"
								variants={iconVariants}
								initial="one"
								animate="two"
								exit="zero"
								className="theHolder"
							>
								<Image
									className="outline-none bg-transparent"
									src="/close.svg"
									alt="Menú"
									layout="intrinsic"
									width="25"
									height="20"
								/>
							</motion.div>
						) : (
							<motion.div
								key="isClosed-menu"
								variants={iconVariants}
								initial="one"
								animate="two"
								exit="zero"
								className="theHolder"
							>
								<Image
									className="outline-none bg-transparent"
									src="/burger.svg"
									alt="Menú"
									layout="intrinsic"
									width="25"
									height="20"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</nav>
			<AnimatePresence exitBeforeEnter>
				<>
					{open && (
						<motion.div
							key="menu-opened"
							initial="init"
							animate="anim"
							exit="end"
							variants={menuVariants}
							className="mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white pointer-events-none flex items-center justify-center flex-col border-bottom-2 border-main"
						>
							<ul className="pointer-events-auto flex flex-col items-center justify-center">
								<li
									className="font-bold uppercase hover:text-main text-center mb-6 text-xl"
									onClick={() => handleMenu(true)}
								>
									<ActiveLink
										activeClassName="text-main"
										href="/"
									>
										{lang === 'es' ? (
											<a>Inicio</a>
										) : (
											<a>Home</a>
										)}
									</ActiveLink>
								</li>
								<li
									className="font-bold uppercase hover:text-main text-center mb-6 text-xl"
									onClick={() => handleMenu(true)}
								>
									<ActiveLink
										activeClassName="text-main"
										href="/proactiva"
									>
										{lang === 'es' ? (
											<a>Transparencia proactiva</a>
										) : (
											<a>Proactive transparency</a>
										)}
									</ActiveLink>
								</li>
								<li
									className="font-bold uppercase hover:text-main text-center mb-6 text-xl"
									onClick={() => handleMenu(true)}
								>
									<ActiveLink
										activeClassName="text-main"
										href="/producto"
									>
										{lang === 'es' ? (
											<a>Producto</a>
										) : (
											<a>Product</a>
										)}
									</ActiveLink>
								</li>
								<li
									className="font-bold uppercase hover:text-main text-center mb-6 text-xl"
									onClick={() => handleMenu(true)}
								>
									<ActiveLink
										activeClassName="text-main"
										href="/servicios"
									>
										{lang === 'es' ? (
											<a>Servicios</a>
										) : (
											<a>Services</a>
										)}
									</ActiveLink>
								</li>
								<li
									// style={{ maxWidth: 250 }}
									className="font-bold uppercase py-4 px-5 bg-black text-white hover:bg-main hover:text-black cursor-pointer transparenta-btn-toblack shadow-none hover:shadow-transparentaSmall transition duration-200 ease-in-out text-center"
									onClick={() => {
										handleMenu(false);
										handleContact();
									}}
								>
									{lang === 'es' ? (
										<a>Obtén Visibia</a>
									) : (
										<a>Get Visibia</a>
									)}
								</li>
							</ul>
							<ul className="social absolute left-1/2 bottom-5 transform -translate-x-1/2 flex items-center justify-center w-full">
								<li className="mr-4">
									<a
										href="#instagram"
										className="border-3 border-black flex items-center p-2 hover:opacity-50"
									>
										<Image
											src="/instagram-black.svg"
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
										className="border-3 border-black flex items-center p-2 hover:opacity-50"
									>
										<Image
											src="/twitter-black.svg"
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
										className="border-3 border-black flex items-center p-2 hover:opacity-50"
									>
										<Image
											src="/facebook-black.svg"
											alt="Facebook"
											layout="intrinsic"
											height="18px"
											width="18px"
										/>
									</a>
								</li>
							</ul>
						</motion.div>
					)}
					{transOpen && (
						<motion.div
							key="contact-opened"
							initial="init"
							animate="anim"
							exit="end"
							variants={menuVariants}
							className="mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white flex items-center justify-start flex-col border-bottom-2 border-main overflow-y-auto px-10 pt-20"
						>
							<h3 className="text-3xl text-main font-bold w-full text-left">
								Contacto
							</h3>
							<Formik
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
										errors.name = 'Campo obligatorio';
									}
									if (!values.orgName) {
										errors.orgName = 'Campo obligatorio';
									}
									if (!values.sector) {
										errors.sector = 'Campo obligatorio';
									}
									if (!values.services) {
										errors.services = 'Campo obligatorio';
									}
									if (!values.text) {
										errors.text = 'Campo obligatorio';
									}
									if (!values.email) {
										errors.email = 'Campo obligatorio';
									} else if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
											values.email
										)
									) {
										errors.email = 'Correo inválido';
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
										alert(JSON.stringify(values, null, 2));
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
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
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
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
										/>
										{errors.sector && (
											<p className="text-red-500 text-xs uppercase text-left w-full">
												{errors.sector}
											</p>
										)}
										<select
											name="sector"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.sector}
											style={{
												background:
													'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02eiIvPjwvc3ZnPg==)',
												backgroundPosition: '98% 70%',
												backgroundRepeat: 'no-repeat',
												WebkitAppearance: 'none'
											}}
											className={`w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 outline-none focus:border-main placeholder-black ring-0 ${
												values.sector !== 'Sector *'
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
										{/* <input
											type="text"
											name="sector"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.sector}
											placeholder="Sector"
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/> */}
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
											value={values.sector}
											placeholder="Correo *"
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black outline-none ring-0 focus:border-main"
										/>
										{errors.services && (
											<p className="text-red-500 text-xs uppercase text-left w-full">
												{errors.services}
											</p>
										)}
										{/* <input
											type="email"
											name="email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											placeholder="Servicios de interés"
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/> */}
										<textarea
											name="services"
											cols="30"
											rows="10"
											placeholder="Servicios de interés"
											onChange={handleChange}
											// onBlur={handleBlur}
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall mb-6 placeholder-black max-h-20 outline-none ring-0 focus:border-main"
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
											className="w-full bg-transparent text-black border-3 border-black py-1 px-2 shadow-transparentaSmall placeholder-black outline-none ring-0 focus:border-main"
										>
											{values.text}
										</textarea>
										<div className="btn-holder flex items-center justify-center w-full mt-10">
											<button
												type="submit"
												className="bg-black py-3 w-11/12 text-center text-white font-bold after-shadow-outline"
											>
												Enviar
											</button>
										</div>
									</form>
								)}
							</Formik>
						</motion.div>
					)}
				</>
			</AnimatePresence>
		</>
	);
}

export default ResNav;
