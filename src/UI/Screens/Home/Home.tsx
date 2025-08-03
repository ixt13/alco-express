import { FilterSVG } from '@/UI/SvgComponents/FilterSVG'
import sty from './Home.module.scss'

import { Item } from '@/UI/Components/Item/Item'
export const Home = () => {
	return (
		<div className={sty.homeWrapper}>
			<div className={sty.homePageContent}>
				<h3>All Products</h3>

				<div className={sty.filterAndSort}>
					<div className={sty.filterAndSortItem}>
						<FilterSVG className={sty.filterAndSortIcon} />
						<p>Filter and Sort </p>
					</div>
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
	)
}
