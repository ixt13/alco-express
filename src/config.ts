export const navTabLinks = [
	'Despre noi',
	'Magazine',
	'Articole',
	'Cum comand',
	'Livrare',
	'Plată',
	'Carieră',
	'Contacte',
]

export const phoneNumber = '+(373) 688 555 69'

export const siteLanguages = ['EN', 'RU', 'RO']

export const headerInputPlaceHolder = {
	en: '',
	ru: '',
	ro: 'Căutare în catalog',
}

interface iProduct {
	name: string
	image?: SVGElement
}

const menuItems = [
	'Vinul',
	'Certificate Cadou',
	'CHAMPAGNE',
	'Bere',
	'Vodka',
	'Coniac',
	'Brandy',
	'Rom',
	'Whisky',
	'Gin',
	'Tequila',
	'Sucuri ',
]
export const productNavCategories: iProduct[] = menuItems.map(name => ({
	name,
}))
