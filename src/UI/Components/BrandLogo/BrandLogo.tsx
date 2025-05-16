import Image from 'next/image'
import sty from './BrandLogo.module.scss'

import brandLogoIcon from '@/assets/images/cleanBrandIcon.png'
import Link from 'next/link'
export const BrandLogo = () => {
	return (
		<Link href={'/'} className={sty.siteNameContainer}>
			<div className={sty.titleTextBox}>
				<p className={sty.title}>AlcoExpress</p>
			</div>
			<Image
				src={brandLogoIcon}
				alt='brandLogoIcon'
				className={sty.brandLogoIcon}
			></Image>
		</Link>
	)
}
