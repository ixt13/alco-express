'use client'
import { pathNames } from '@/config'
import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Cart() {
	const data: any[] = []
	return (
		<div className={styles.wrapper}>
			{data ? (
				<div>ss</div>
			) : (
				<div className={styles.emptyCartBox}>
					<div className={styles.textContent}>
						<CartSVG className={styles.cartIcon}></CartSVG>
						<div>Ваша корзина пуста</div>
						<div>Добавьте товары для покупки</div>
					</div>
					<Link href={pathNames.home}>
						<button className={styles.button}>Продолжить покупки</button>
					</Link>
				</div>
			)}
		</div>
	)
}
