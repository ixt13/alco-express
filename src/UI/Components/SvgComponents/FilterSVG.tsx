interface iFilterSVG {
	className: string
}

export const FilterSVG = ({ className }: iFilterSVG) => {
	return (
		<svg
			className={className}
			width='40'
			height='35'
			viewBox='0 0 40 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 27.6H10.5'
				stroke='white'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M39 6.69995H29.5'
				stroke='white'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M21.9 27.6H39'
				stroke='white'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M18.1 6.69995H1'
				stroke='white'
				strokeWidth='2'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.5 23.8C10.5 22.7507 11.3507 21.9 12.4 21.9H20C21.0494 21.9 21.9 22.7507 21.9 23.8V31.4C21.9 32.4494 21.0494 33.3 20 33.3H12.4C11.3507 33.3 10.5 32.4494 10.5 31.4V23.8Z'
				stroke='white'
				strokeWidth='2'
			/>
			<path
				d='M29.5 2.9C29.5 1.85067 28.6494 1 27.6 1H20C18.9506 1 18.1 1.85067 18.1 2.9V10.5C18.1 11.5493 18.9506 12.4 20 12.4H27.6C28.6494 12.4 29.5 11.5493 29.5 10.5V2.9Z'
				stroke='white'
				strokeWidth='2'
			/>
		</svg>
	)
}
