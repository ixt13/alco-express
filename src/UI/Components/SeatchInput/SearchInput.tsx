import { SearchSVG } from '../SvgComponents/SearchSVG'
import sty from './SearchInput.module.scss'
export const SearchInput = () => {
	return (
		<>
			<div className={sty.inputBox}>
				<input type='text' placeholder='Search ' />
				<SearchSVG className={sty.searchIcon} />
			</div>
		</>
	)
}
