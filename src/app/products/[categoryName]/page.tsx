import styles from './page.module.scss'

export default async function Products({
	params,
}: {
	params: Promise<{ categoryName: string }>
}) {
	const { categoryName } = await params
	const decoded = decodeURIComponent(categoryName)
	return (
		<div className={styles.grid}>
			<p>{decoded}</p>
		</div>
	)
}
