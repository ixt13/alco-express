import { iSVG } from './type'

export const MenuSVG = ({ className }: iSVG) => {
	return (
		<svg
			className={className}
			width='10'
			height='10'
			viewBox='0 0 800 800'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='440'
				y='440'
				width='360'
				height='360'
				rx='8'
				fill='currentColor'
			/>
			<rect width='360' height='360' rx='8' fill='currentColor' />
			<rect x='440' width='360' height='360' rx='8' fill='currentColor' />
			<rect y='440' width='360' height='360' rx='8' fill='currentColor' />
		</svg>
	)
}
