import brandLogoIcon from '@/assets/images/brandLogoIcon.png'
import Image from 'next/image'
import { CartSVG } from '../SvgComponents/CartSVG'
import { SearchSVG } from '../SvgComponents/SearchSVG'
import sty from './TopSide.module.scss'

interface iTopSide {
	cart: boolean
	search: boolean
}

export const TopSide = ({ cart, search }: iTopSide) => {
	return (
		<div
			className={sty.topSide}
			style={{ alignItems: search ? 'center' : 'flex-start' }}
		>
			<div className={sty.topSideContainer}>
				<div className={sty.siteNameContainer}>
					<div className={sty.titleTextBox}>
						<p className={sty.title}>AlcoExpress</p>
					</div>

					<Image
						src={brandLogoIcon}
						alt='brandLogoIcon'
						className={sty.brandLogoIcon}
					></Image>
				</div>
				{search && (
					<div className={sty.inputBox}>
						<input type='text' placeholder='Search ' />
						<SearchSVG className={sty.searchIcon} />
					</div>
				)}
				{cart && (
					<div className={sty.rightSide}>
						<div className={sty.rightSideBox}>
							<CartSVG className={sty.rightSideIcon} />

							<div className={sty.cartBox}>
								<div className={sty.cartCount}>
									<p>{'33'}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			{search && (
				<div className={sty.inputBoxMobile}>
					<input type='text' placeholder='Search ' />
					<SearchSVG className={sty.searchIcon} />
				</div>
			)}
		</div>
	)
}
