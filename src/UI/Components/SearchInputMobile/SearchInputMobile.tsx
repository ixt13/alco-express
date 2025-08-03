import { SearchSVG } from '../../SvgComponents/SearchSVG'
import sty from './SearchInputMobile.module.scss'

export const SearchInputMobile = () => {
	return (
		<div className={sty.inputBoxMobile}>
			<input type='text' placeholder='Search ' />
			<SearchSVG className={sty.searchIcon} />
		</div>
	)
}
