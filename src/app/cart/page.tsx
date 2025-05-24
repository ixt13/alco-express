import { BrandLogo } from '@/UI/Components/BrandLogo/BrandLogo'
import { SearchInput } from '@/UI/Components/SeatchInput/SearchInput'
import { UserCartPanel } from '@/UI/Components/UserCartPanel/UserCartPanel'
import { Cart } from '@/UI/Screens/Cart/Cart'
export default function page() {
	return (
		<>
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
			<Cart />
		</>
	)
}
