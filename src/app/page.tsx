import { Header } from '@/UI/Components/Header/Header'
import { FilterSVG } from '@/UI/Components/SvgComponents/FilterSVG'
import { TopSide } from '@/UI/Components/TopSide/TopSide'
import sty from './page.module.scss'

import { Item } from '@/UI/Components/Item/Item'
export default function Home() {
	return (
		<div className={sty.wrapper}>
			<Header />
			<TopSide />
			<div className={sty.homeWrapper}>
				<div className={sty.homePageContent}>
					<h3>Alle Produkte </h3>

					<div className={sty.filterAndSort}>
						<FilterSVG className={sty.filterAndSortIcon} />
						<p>Filter and Sort </p>
					</div>

					<div className={sty.itemsContainer}>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</div>
		</div>
	)
}
