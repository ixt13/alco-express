'use client'

import { pathNames } from '@/config'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { HearhSVGPassive } from '@/UI/SvgComponents/HearhSVGPassive'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Favorites() {
	const { favoritesList } = useLocalStorage()

	return (
		<div className={styles.wrapper}>
			{favoritesList && favoritesList?.length >= 1 ? (
				<div>ss</div>
			) : (
				<div className={styles.emptyCartBox}>
					<div className={styles.textContent}>
						<HearhSVGPassive className={styles.cartIcon}></HearhSVGPassive>

						<div>Нет товаров</div>
						<div>Добавьте товары в список избранных</div>
					</div>
					<Link href={pathNames.home}>
						<button className={styles.button}>На главную странницу</button>
					</Link>
				</div>
			)}
		</div>
	)
}
