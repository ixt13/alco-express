'use client'

import image from '@/assets/images/drinks/whisky/cuttySark.png'

import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import Image from 'next/image'
import { useState } from 'react'
import styles from './DrinkCard.module.scss'

export const DrinkCard = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	return (
		<div
			className={`${styles.drinkCard} ${isActive && styles.drinkCardActive} ${
				!isActive && styles.drinkCardHover
			}`}
			onMouseDown={e => {
				if (
					(e.target as HTMLElement).tagName === 'path' ||
					(e.target as HTMLElement).tagName === 'svg'
				) {
					return
				} else {
					setIsActive(prevState => !prevState)
				}
			}}
			onMouseUp={e => {
				if (
					(e.target as HTMLElement).tagName === 'path' ||
					(e.target as HTMLElement).tagName === 'svg'
				) {
					return
				} else {
					setIsActive(prevState => !prevState)
				}
			}}
		>
			<div className={styles.cardImageSection}>
				<HearthSVG
					className={`${styles.cardImageSectionHeart} ${'notActive'}`}
				/>
				<Image className={styles.image} src={image} alt='asdas' />
			</div>
			<div className={styles.cardDescriptionSection}>
				<p>BLENDED SCOTCH WHISKY CUTTY SARK </p>
				<p>0.7L</p>
				<p>169lei</p>

				<CartSVG className={styles.cardCartIcon}></CartSVG>
			</div>
		</div>
	)
}
