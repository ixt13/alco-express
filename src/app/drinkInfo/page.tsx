'use client'

import bottleImage from '@/assets/images/drinks/whisky/cuttySark.png'

import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from './drinkInfo.module.scss'
export default function page() {
	const likeRef = useRef<SVGSVGElement>(null)
	const [isActiveHearth, setIsActiveHearth] = useState<boolean>(false)
	const [isActiveCart, setIsActiveCart] = useState<boolean>(false)

	const handleHearthClick = () => setIsActiveHearth(prevState => !prevState)

	const handleCartClick = () => setIsActiveCart(prevState => !prevState)

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={bottleImage} alt='' fill style={{ objectFit: 'contain' }} />
			</div>
			<div className={styles.baseInfo}>
				<h2>VIN J.P.CHENET RESERVE CHARDONNAY-VIOGNIER ALB SEC </h2>
				<p>0.75L</p>
				<p className={styles.description}>
					Vin delicat, ideal pentru a fi consumat cu peşte şi fructe de mare.
					Acesta poate fi, de asemenea, servit ca un aperitiv sau într-un wine
					bar.
				</p>
				<div className={styles.buttons}>
					<div
						onClick={() => {
							if (likeRef.current) {
								likeRef.current.dispatchEvent(
									new MouseEvent('click', {
										bubbles: true,
										cancelable: true,
									})
								)
							}
						}}
						className={`${styles.likeGroup} ${
							isActiveHearth && styles.drinkCardActive
						} ${!isActiveHearth && styles.drinkCardHover}`}
						onMouseDown={handleHearthClick}
						onMouseUp={handleHearthClick}
						onMouseLeave={() => {
							if (isActiveHearth === true) {
								setIsActiveHearth(false)
							}
						}}
					>
						<HearthSVG className={styles.likeIcon} ref={likeRef} />
						<p>Adaugă la favorite</p>
					</div>
					<div
						className={`${styles.likeGroup} ${
							isActiveCart && styles.drinkCardActive
						} ${!isActiveCart && styles.drinkCardHover}`}
						onMouseDown={handleCartClick}
						onMouseUp={handleCartClick}
						onMouseLeave={() => {
							if (isActiveCart === true) {
								setIsActiveCart(false)
							}
						}}
					>
						<CartSVG className={styles.likeIcon} />
						<p>Adaugă in cos</p>
					</div>
				</div>

				<p className={styles.price}>149Lei</p>
			</div>
		</div>
	)
}
