'use client'

import bottleImage from '@/assets/images/drinks/whisky/cuttySark.png'

import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './drinkInfo.module.scss'

export default function Page() {
	const likeRef = useRef<SVGSVGElement>(null)

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<Image src={bottleImage} alt='' fill style={{ objectFit: 'contain' }} />
			</div>
			<div className={styles.baseInfo}>
				<h2>VIN J.P.CHENET RESERVE CHARDONNAY-VIOGNIER ALB SEC 0.75L</h2>
				<p className={styles.description}>
					Vin delicat, ideal pentru a fi consumat cu peşte şi fructe de mare.
					Acesta poate fi, de asemenea, servit ca un aperitiv sau într-un wine
					bar
				</p>
				<div
					onClick={() => {
						likeRef.current &&
							likeRef.current.dispatchEvent(
								new MouseEvent('click', {
									bubbles: true,
									cancelable: true,
								})
							)
					}}
					className={styles.likeGroup}
				>
					<HearthSVG className={styles.likeIcon} ref={likeRef} />
					<p>Adaugă la favorite</p>
				</div>
				<p>149Lei</p>
			</div>
		</div>
	)
}
