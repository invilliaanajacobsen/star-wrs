const size = {
	mobilexs: '320px',
	mobile: '425px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '2560px'
}

export const device = {
	mobilexs: `(min-width: ${size.mobilexs})`,
	mobile: `(min-width: ${size.mobile})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`
};