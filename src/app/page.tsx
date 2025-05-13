import sty from './page.module.scss'

import { BrandLogo } from '@/UI/Components/BrandLogo/BrandLogo'
import { SearchInputMobile } from '@/UI/Components/SearchInputMobile/SearchInputMobile'
import { SearchInput } from '@/UI/Components/SeatchInput/SearchInput'
import { SeparatorLine } from '@/UI/Components/SeparatorLine/SeparatorLine'
import { UserCartPanel } from '@/UI/Components/UserCartPanel/UserCartPanel'
import { Home } from '@/UI/Screens/Home/Home'
export default function page() {
	return (
		<div className={sty.wrapper}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					padding: '1rem 0rem',
				}}
			>
				<BrandLogo />
				<SearchInput />
				<UserCartPanel />
			</div>
			<SearchInputMobile />
			<SeparatorLine />
			<Home />
		</div>
	)
}
