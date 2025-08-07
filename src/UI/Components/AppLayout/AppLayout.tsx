'use client'

import { menuItems, pathNames } from '@/config'
import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { FilterSVG } from '@/UI/SvgComponents/FilterSVG'
import { HearthSVG } from '@/UI/SvgComponents/HearthSvg/HearthSVG'
import { Logo } from '@/UI/SvgComponents/LogoSVG'
import { MenuSVG } from '@/UI/SvgComponents/MenuSVG'
import { UserSVG } from '@/UI/SvgComponents/UserSVG'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { CategoriesButton } from '../CategoriesButton/CategoriesButton'
import styles from './AppLayout.module.scss'

interface iAppLayout {
	children?: ReactNode
}

export const AppLayout = ({ children }: Readonly<iAppLayout>) => {
	const stickyRef = useRef<HTMLDivElement>(null)
	const [isSticky, setIsSticky] = useState(false)
	const pathName = usePathname()
	const cleanPathName = pathName.split('/').join('')

	useEffect(() => {
		const handleScroll = () => {
			if (!stickyRef.current) return

			const top = stickyRef.current.getBoundingClientRect().top
			setIsSticky(top <= 0)
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={styles.wrapper}>
			<div
				ref={stickyRef}
				className={styles.mainNavSection}
				style={{
					...(isSticky ? { height: '100vh', borderRadius: '0px' } : {}),
				}}
			>
				<div className={styles.navTopGroup}>
					<Link href={pathNames.home} className={styles.logoSection}>
						<Logo className={styles.logo} />
						<p>express</p>
					</Link>
					<div className={styles.menuButtonsGroup}>
						<div onMouseDown={() => {}} className={styles.menuButton}>
							<MenuSVG className={styles.menuIcon} />
							<span>Catalog</span>
						</div>
						<div className={styles.menuButton}>
							<FilterSVG className={styles.menuIcon} />
							<span>Filtre</span>
						</div>
					</div>
				</div>
				<div className={styles.navBotSection}>
					{menuItems.map((el, index) => (
						<CategoriesButton el={el} key={index} />
					))}
				</div>
			</div>
			<div className={styles.secondNavSection}>
				<div className={styles.navBar}>
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
							<HearthSVG className={styles.hearthIcon} />
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

				{pathName !== '/' ? (
					<div className={styles.breadcrumbs}>
						<Link href={'#'}>Pagina principală</Link>
						<p>{cleanPathName}</p>
					</div>
				) : (
					<p className={styles.siteInfo}>
						AlcoExpress ®️ Magazin online de Bauturi Alcoolice în Moldova
					</p>
				)}

				<div className={styles.childrenContainer}>{children}</div>
			</div>
		</div>
	)
}
