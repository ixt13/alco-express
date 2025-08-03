'use client'
import { navTabLinks, phoneNumber, siteLanguages } from '@/config'
import { CallSVG } from '@/UI/SvgComponents/CallSVG'
import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { FaceBookSVG } from '@/UI/SvgComponents/FaceBookSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSVG'
import { InstagramSVG } from '@/UI/SvgComponents/InstagramSVG'
import { Logo } from '@/UI/SvgComponents/Logo'
import { TikTokSVG } from '@/UI/SvgComponents/TikTokSVG'
import { UserSVG } from '@/UI/SvgComponents/UserSVG'
import Link from 'next/link'
import { useRef } from 'react'
import styles from './Header.module.scss'
export const Header = () => {
	const phoneCallRef = useRef<HTMLAnchorElement>(null)

	const handleClick = () => phoneCallRef.current?.click()

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.navTab}>
					{navTabLinks &&
						navTabLinks.map((el, index) => (
							<Link href={'#'} key={index}>
								{el}
							</Link>
						))}
				</div>
				<div className={styles.rigthSide}>
					<div className={styles.phoneSection} onClick={handleClick}>
						<CallSVG className={styles.icon} style={{ padding: '2px' }} />
						<p>{'Support Online'}</p>
						<a
							ref={phoneCallRef}
							href={`tel:${phoneNumber}`}
							itemProp='telephone'
						>
							{phoneNumber}
						</a>
					</div>
					<div className={styles.socialsSection}>
						<FaceBookSVG className={styles.icon} style={{ padding: '2px' }} />
						<InstagramSVG className={styles.icon} />
						<TikTokSVG className={styles.icon} />
					</div>
					<div className={styles.languagesSection}>
						{siteLanguages.map((el, index) => (
							<div key={index}>{el}</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.secondPart}>
				<div className={styles.logoSection}>
					<Logo className={styles.logo} />
					<p>express</p>
				</div>
				<div className={styles.searchSection}>
					<input
						className={styles.searchInput}
						type='text'
						placeholder={'Cauta in catalog'}
					/>
				</div>
				<div className={styles.logSection}>
					<div className={styles.userSection}>
						<UserSVG className={styles.secondIcon} />
						<span>{`AUTENTIFICARE`}</span>
					</div>
					<div className={styles.userSection}>
						<HearthSVG className={styles.secondIcon} />
						<div className={styles.logSectionCounter}>
							<span>0</span>
						</div>
					</div>
					<div className={styles.userSection}>
						<CartSVG className={styles.secondIcon}></CartSVG>
						<div className={styles.logSectionCounter}>
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
