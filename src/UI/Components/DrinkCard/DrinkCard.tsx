'use client'

import image from '@/assets/images/drinks/whisky/cuttySark.png'

import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import Image from 'next/image'

import { pathNames } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './DrinkCard.module.scss'

export const DrinkCard = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	const router = useRouter()

	const handleHearthClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		if (
			(e.target as HTMLElement).tagName === 'path' ||
			(e.target as HTMLElement).tagName === 'svg'
		) {
			return
		} else {
			setIsActive(prevState => !prevState)
		}
	}

	return (
		<Link
			href={pathNames.drinkInfo}
			className={`${styles.drinkCard} ${isActive && styles.drinkCardActive} ${
				!isActive && styles.drinkCardHover
			}`}
			onMouseDown={handleHearthClick}
			onMouseUp={handleHearthClick}
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

				<CartSVG className={styles.cardCartIcon} />
			</div>
		</Link>
	)
}
