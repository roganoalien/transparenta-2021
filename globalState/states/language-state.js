import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState('es');

	const setSpanish = () => {
		setLang('es');
	};

	const setEnglish = () => {
		setLang('en');
	};

	return (
		<LanguageContext.Provider value={{ lang, setSpanish, setEnglish }}>
			{children}
		</LanguageContext.Provider>
	);
}
