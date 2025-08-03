'use client'
import { ArrowSVG } from '@/UI/SvgComponents/ArrowSVG'
import { useState } from 'react'
import styles from './CategoriesButton.module.scss'

interface iCategoriesButton {
	el: string
}

export const CategoriesButton = ({ el }: iCategoriesButton) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<div
			className={styles.categoriesButton}
			onMouseEnter={() => setIsHover(state => !state)}
			onMouseLeave={() => setIsHover(state => !state)}
		>
			<p>{el}</p>
			<ArrowSVG
				className={`${styles.categoriesButtonIcon} ${
					!isHover && styles.fadeOut
				}`}
				style={{
					...(isHover ? { visibility: 'visible' } : { visibility: 'hidden' }),
				}}
			/>
		</div>
	)
}
