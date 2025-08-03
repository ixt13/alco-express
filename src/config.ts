import { BeerSVG } from './UI/SvgComponents/BeerSVG'
import { ChampagneSVG } from './UI/SvgComponents/ChampagneSVG'
import { GiftCardSVG } from './UI/SvgComponents/GiftCardSVG'
import { VineSVG } from './UI/SvgComponents/VineSVG'
import { VodkaSVG } from './UI/SvgComponents/VodkaSVG'

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
	component: React.ComponentType<any>
}

export const menuItems = [
	'Vodka',
	'Coniac',
	'Brandy',
	'Rom',
	'Whisky',
	'Gin',
	'Tequila',
	'Sucuri',
]
