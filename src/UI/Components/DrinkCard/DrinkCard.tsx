import image from '@/assets/images/drinks/whisky/cuttySark.png'

import Image from 'next/image'
import { LikeComponent } from '../LikeComponents/LikeComponent'
import styles from './DrinkCard.module.scss'

export const DrinkCard = () => {
	return (
		<div className={styles.drinkCard}>
			<div className={styles.cardImageSection}>
				<LikeComponent className={styles.cardImageSectionHeart} />
				<Image className={styles.image} src={image} alt='asdas'></Image>
			</div>
			<div className={styles.cardDescriptionSection}>
				<p>169lei</p>
			</div>
		</div>
	)
}
