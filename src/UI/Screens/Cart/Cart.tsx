'use client'
import { pathNames } from '@/config'
import { DrinkCard } from '@/UI/Components/DrinkCard/DrinkCard'
import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Cart.module.scss'

export default function Cart() {
	const [data, setData] = useState<number[]>([])
	useEffect(() => {
		setData([1])
	}, [])
	return (
		<div className={styles.wrapper}>
			{data.length >= 1 ? (
				<div className={styles.cart}>
					<div className={styles.drinkCardContainer}>
						<DrinkCard />
						<DrinkCard />
						<DrinkCard />
						<DrinkCard />
						<DrinkCard />
						<DrinkCard />
					</div>
					<div className={styles.cartInfoForm}>
						<div className={styles.cartInfiLineTitle}>
							<p>Comanda ta</p>
						</div>
						<div className={styles.cartInfiLine}>
							<p>Produse</p>
							<p>151 lei</p>
						</div>
						<div className={styles.cartInfiLine}>
							<p>Livrare</p>
							<p>50 lei</p>
						</div>

						<div className={`${styles.cartInfiLine} ${styles.separatorLine}`}>
							<p>Total</p>
							<p>580 lei</p>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.emptyCartBox}>
					<div className={styles.textContent}>
						<CartSVG className={styles.cartIcon} />
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
