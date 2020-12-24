module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: '#484D50',
				main: '#89A4A9',
				white: '#F2F2F2'
			},
			fontFamily: {
				sans: ['Mon']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
