'use client'

import image from '@/assets/images/drinks/whisky/cuttySark.png'

import { CardCartSVG } from '@/UI/SvgComponents/CardCartSVG'
import Image from 'next/image'
import { useState } from 'react'
import { LikeComponent } from '../LikeComponent/LikeComponent'
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
				<LikeComponent
					className={`${styles.cardImageSectionHeart} ${'notActive'}`}
				/>
				<Image className={styles.image} src={image} alt='asdas' />
			</div>
			<div className={styles.cardDescriptionSection}>
				<p>BLENDED SCOTCH WHISKY CUTTY SARK 0.7L</p>
				<p>169lei</p>
				<CardCartSVG className={styles.cardCartIcon} />
			</div>
		</div>
	)
}
