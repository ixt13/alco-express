import brendLogoIcon from '@/assets/images/brendLogoIcon.png'
import phoneIcon from '@/assets/images/phoneIcon.png'
import { phoneNumber } from '@/constants/basicConsts'
import Image from 'next/image'
import sty from './page.module.scss'
export default function Home() {
	return (
		<div className={sty.wrapper}>
			<div className={sty.header}>
				<Image
					src={phoneIcon}
					alt='phoneIcon'
					className={sty.headerPhoneIcon}
				/>
				<div className={sty.phoneNumberBlock}>
					<p>Suport line </p>
					<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
				</div>
				<div className={sty.languageSelect}>
					<button>{'DE'}</button>

					<button>{'RO'}</button>

					<button>{'RU'}</button>
				</div>
			</div>
			<div className={sty.secondHeader}>
				<div className={sty.siteNameContainer}>
					<div className={sty.siteName}>
						<p>AlcoExpress</p>
						<Image
							src={brendLogoIcon}
							alt='brendLogoIcon'
							className={sty.brendLogoIcon}
						></Image>
					</div>
					<p>Wir bringen den Genuss zu Ihnen nach Hause!</p>
				</div>
				<div>
					<input type='text' placeholder='Search in katalog' />
				</div>
			</div>
		</div>
	)
}
