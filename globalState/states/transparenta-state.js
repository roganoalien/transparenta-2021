import React, { useState, createContext } from 'react';

export const TransparentaContext = createContext();

export function TransparentaProvider({ children }) {
	const [transOpen, setTransOpen] = useState(false);

	return (
		<TransparentaContext.Provider value={{ transOpen, setTransOpen }}>
			{children}
		</TransparentaContext.Provider>
	);
}
