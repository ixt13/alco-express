'use client'
import { pathNames } from '@/config'
import { ArrowSVG } from '@/UI/SvgComponents/ArrowSVG'
import Link from 'next/link'
import styles from './CategoriesButton.module.scss'

interface iCategoriesButton {
	el: string
}

export const CategoriesButton = ({ el }: iCategoriesButton) => {
	return (
		<Link
			href={pathNames.products + '/' + el}
			className={styles.categoriesButton}
		>
			<p>{el}</p>
			<ArrowSVG className={`${styles.categoriesButtonIcon}`} />
		</Link>
	)
}
