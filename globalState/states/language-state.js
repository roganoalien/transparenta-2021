import React, { useState, createContext, useEffect } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState('es');

	useEffect(() => {
		if (localStorage.getItem('lang')) {
			setLang(localStorage.getItem('lang'));
		}
	}, []);

	const setSpanish = () => {
		localStorage.setItem('lang', 'es');
		setLang('es');
	};

	const setEnglish = () => {
		localStorage.setItem('lang', 'en');
		setLang('en');
	};

	return (
		<LanguageContext.Provider
			value={{
				lang,
				setSpanish,
				setEnglish
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}
