import styles from './page.module.scss'

import { DrinkCard } from '@/UI/Components/DrinkCard/DrinkCard'

export default function Page() {
	return (
		<div className={styles.grid}>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard> <DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
			<DrinkCard></DrinkCard>
		</div>
	)
}
