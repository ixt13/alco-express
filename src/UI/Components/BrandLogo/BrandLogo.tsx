import Image from 'next/image'
import sty from './BrandLogo.module.scss'

import brandLogoIcon from '@/assets/images/cleanBrandIcon.png'
export const BrandLogo = () => {
	return (
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
	)
}
