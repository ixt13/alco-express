import styles from './page.module.scss'

import { DrinkCard } from '@/UI/Components/DrinkCard/DrinkCard'

export default function page() {
	return (
		<div className={styles.grid}>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
		</div>
	)
}
