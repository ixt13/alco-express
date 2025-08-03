'use client'
import { navTabLinks, phoneNumber, siteLanguages } from '@/config'
import { CallSVG } from '@/UI/SvgComponents/CallSVG'
import { FaceBookSVG } from '@/UI/SvgComponents/FaceBookSVG'
import { InstagramSVG } from '@/UI/SvgComponents/InstagramSVG'
import { TikTokSVG } from '@/UI/SvgComponents/TikTokSVG'
import Link from 'next/link'
import { useRef } from 'react'
import styles from './Header.module.scss'
export const Header = () => {
	const phoneCallRef = useRef<HTMLAnchorElement>(null)

	const handleClick = () => phoneCallRef.current?.click()

	return (
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
	)
}
