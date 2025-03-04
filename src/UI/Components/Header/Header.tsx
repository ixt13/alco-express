'use client'

import phoneIcon from '@/assets/images/phoneIcon.png'
import { constants } from '@/constants/basicConsts'
import Image from 'next/image'
import { useState } from 'react'
import sty from './Header.module.scss'
export const Header = () => {
	const [isUserPopup, setisUserPopup] = useState<boolean>(false)

	return (
		<div className={sty.header}>
			<Image src={phoneIcon} alt='phoneIcon' className={sty.headerPhoneIcon} />
			<div className={sty.phoneNumberBlock}>
				<p>Suport line </p>
				<a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumber}</a>
			</div>
			<div className={sty.languageSelect}>
				<button>{'DE'}</button>

				<button>{'RO'}</button>

				<button>{'RU'}</button>
			</div>
			<div
				onClick={() => {
					setisUserPopup(prevState => !prevState)
				}}
				className={sty.burger}
			>
				<div className={sty.line}></div>
				<div className={sty.line}></div>
				<div className={sty.line}></div>
			</div>
			<div
				className={`${sty.userPopup} ${isUserPopup ? sty.visible : sty.hidden}`}
			>
				<p
					onClick={() => {
						setisUserPopup(false)
					}}
					style={{
						color: 'white',
					}}
				>
					Close
				</p>
			</div>{' '}
			{/* <UserSVG className={sty.rightSideIcon} /> */}
		</div>
	)
}
