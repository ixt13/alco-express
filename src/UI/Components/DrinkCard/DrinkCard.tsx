'use client'

import image from '@/assets/images/drinks/whisky/cuttySark.png'

import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import Image from 'next/image'

import { pathNames } from '@/config'
import { MinusSvg } from '@/UI/SvgComponents/MinusSvg'
import { PlusSvg } from '@/UI/SvgComponents/PlusSvg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './DrinkCard.module.scss'

export const DrinkCard = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const [isCartItem, setIsCartItem] = useState<boolean>(false)
	const [quantity, setQuantity] = useState<number>(0)

	const pathName = usePathname()

	useEffect(() => {
		if (pathName === pathNames.cart) {
			setIsCartItem(true)
		} else {
			setIsCartItem(false)
		}
	}, [pathName])

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
				<HearthSVG className={`${styles.cardImageSectionHeart} `} />
				<Image className={styles.image} src={image} alt='asdas' />
			</div>
			<div className={styles.cardDescriptionSection}>
				<p>BLENDED SCOTCH WHISKY CUTTY SARK </p>
				<p>0.7L</p>

				<div className={styles.dinamicInfo}>
					<p className={styles.price}>169lei</p>

					<div className={styles.quantity}>
						<MinusSvg onClick={setQuantity} />
						{quantity}
						<PlusSvg onClick={setQuantity} />
					</div>
					<CartSVG
						className={
							isCartItem ? styles.cardCartIconSelected : styles.cardCartIcon
						}
					/>
				</div>
			</div>
		</Link>
	)
}
