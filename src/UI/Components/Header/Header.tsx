'use client'

import phoneIcon from '@/assets/images/phoneIcon.png'
import { constants } from '@/constants/basicConsts'
import Image from 'next/image'
import sty from './Header.module.scss'

export const Header = () => {
	return (
		<div className={sty.topContainer}>
			<Image src={phoneIcon} alt='phoneIcon' className={sty.headerPhoneIcon} />
			<div className={sty.phoneNumberBlock}>
				<p>Suport line </p>
				<a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumber}</a>
			</div>
			<div className={sty.languageSelect}>
				<button>{'EN'}</button>

				<button>{'RO'}</button>

				<button>{'RU'}</button>
			</div>
		</div>
	)
}
