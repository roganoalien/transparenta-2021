import { useState, useContext } from 'react';
import Image from 'next/image';
import ActiveLink from '../components/ActiveLink';
import { TransparentaContext } from '../globalState';
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
			<nav className="w-full flex items-center justify-between px-35 py-half z-50 fixed left-0 top-0 bg-white">
				<div className="mainLogo flex items-center justify-center w-auto">
					<Image
						src="/transparenta-logo.svg"
						alt="Transparenta Logo"
						layout="intrinsic"
						width="200"
						height="17px"
					/>
				</div>
				<button
					className="bg-gray-100 outline-none"
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
							<ul className="pointer-events-auto">
								<li
									className="font-bold uppercase hover:text-main text-center mb-6 text-xl"
									onClick={() => handleMenu(true)}
								>
									<ActiveLink
										activeClassName="text-main"
										href="/"
									>
										<a>Inicio</a>
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
										<a>Transparencia proactiva</a>
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
										<a>Producto</a>
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
										<a>Servicios</a>
									</ActiveLink>
								</li>
								<li
									className="font-bold uppercase py-2 px-4 bg-black text-white hover:bg-main hover:text-black cursor-pointer transparenta-btn-toblack shadow-none hover:shadow-transparentaSmall transition duration-200 ease-in-out text-center"
									onClick={() => {
										handleMenu(false);
										handleContact();
									}}
								>
									Obtén Transparenta
								</li>
							</ul>
							<ul className="social absolute left-1/2 bottom-5 transform -translate-x-1/2 flex items-center justify-center w-full">
								<li className="mr-4">
									<a
										href="#instagram"
										className="border-2 border-black flex items-center p-2 hover:opacity-50"
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
										className="border-2 border-black flex items-center p-2 hover:opacity-50"
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
										className="border-2 border-black flex items-center p-2 hover:opacity-50"
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
								onSubmit={(values, { setSubmitting }) => {
									alert('enviando');
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2));
										setSubmitting(false);
									}, 400);
								}}
							>
								{({
									values,
									errors,
									touched,
									handleChange,
									handleBlur,
									handleSubmit,
									isSubmitting
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
											onBlur={handleBlur}
											value={values.name}
											placeholder="Nombre"
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6"
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
											onBlur={handleBlur}
											value={values.orgName}
											placeholder="Nombre de la organización"
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/>
										{errors.sector && (
											<p className="text-red-500 text-xs uppercase text-left w-full">
												{errors.sector}
											</p>
										)}
										<input
											type="text"
											name="sector"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.sector}
											placeholder="Sector"
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/>
										{errors.sector && (
											<p className="text-red-500 text-xs uppercase text-left w-full">
												{errors.sector}
											</p>
										)}
										<input
											type="text"
											name="sector"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.sector}
											placeholder="Servicios de interés"
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/>
										{errors.email && (
											<p className="text-red-500 text-xs uppercase text-left w-full">
												{errors.email}
											</p>
										)}
										<input
											type="email"
											name="email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											placeholder="Servicios de interés"
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall mb-6"
										/>
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
											onBlur={handleBlur}
											className="w-full bg-transparent text-black border-2 border-black py-1 px-2 shadow-transparentaSmall"
										>
											{values.text}
										</textarea>
										<div className="btn-holder flex items-center justify-center w-full mt-10">
											<button className="bg-black py-3 w-full text-center text-white font-bold after-shadow-outline">
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
