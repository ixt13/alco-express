import Image from 'next/image'
import sty from './TopSide.module.scss'
import brandLogoIcon from '@/assets/images/brandLogoIcon.png'
import { SearchSVG } from '../SvgComponents/SearchSVG'
import { CartSVG } from '../SvgComponents/CartSVG'

export const TopSide = () => {
	return (
		<div className={sty.topSide}>
			<div className={sty.siteNameContainer}>
				<div className={sty.titleTextBox}>
					<p className={sty.title}>AlcoExpress</p>
					<p className={sty.slogan}>
						Wir bringen den Genuss zu Ihnen nach Hause!
					</p>
				</div>

				<Image
					src={brandLogoIcon}
					alt='brandLogoIcon'
					className={sty.brandLogoIcon}
				></Image>
			</div>
			<div className={sty.inputBox}>
				<input type='text' placeholder='Search ' />
				<SearchSVG className={sty.searchIcon} />
			</div>
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
		</div>
	)
}
