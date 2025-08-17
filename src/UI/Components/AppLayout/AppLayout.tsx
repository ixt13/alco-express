'use client'

import { menuItems, pathNames } from '@/config'
import { CartSVG } from '@/UI/SvgComponents/CartSVG'
import { FilterSVG } from '@/UI/SvgComponents/FilterSVG'
import { HearhSVGPassive } from '@/UI/SvgComponents/HearhSVGPassive'
import { Logo } from '@/UI/SvgComponents/LogoSVG'
import { MenuSVG } from '@/UI/SvgComponents/MenuSVG'
import { UserSVG } from '@/UI/SvgComponents/UserSVG'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { CategoriesButton } from '../CategoriesButton/CategoriesButton'
import { Footer } from '../Footer/Footer'
import styles from './AppLayout.module.scss'

interface iAppLayout {
	children?: ReactNode
}

export const AppLayout = ({ children }: Readonly<iAppLayout>) => {
	const pathName = usePathname()
	const router = useRouter()
	const cleanPathName = pathName.split('/').join('')

	const headerRef = useRef<HTMLDivElement>(null)

	const [showModalCartButton, setShowModalCartButton] = useState<boolean>(false)

	useEffect(() => {
		function handleScroll() {
			const headerHeight = headerRef.current!.offsetHeight

			if (!headerRef.current) return

			if (window.scrollY >= headerHeight) {
				setShowModalCartButton(true)
			} else {
				setShowModalCartButton(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.fixedPos}>
				<div className={styles.mainNavSection}>
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
			</div>

			<div className={styles.secondNavSection}>
				<div
					className={`${styles.fixedButton} ${
						showModalCartButton ? styles.show : styles.hide
					} `}
				>
					<CartSVG className={styles.secondIcon} />
					<div className={styles.logSectionCounter}>
						<span>0</span>
					</div>
				</div>
				<div ref={headerRef} className={styles.navBar}>
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
						<Link href={pathNames.cart} className={styles.userSection}>
							<HearhSVGPassive className={styles.hearthIcon} />

							<div className={styles.logSectionCounter}>
								<span>0</span>
							</div>
						</Link>
						<Link
							href={pathNames.cart}
							onClick={() => {}}
							className={styles.userSection}
						>
							<CartSVG className={styles.secondIcon}></CartSVG>
							<div className={styles.logSectionCounter}>
								<span>0</span>
							</div>
						</Link>
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
				<Footer />
			</div>
		</div>
	)
}
