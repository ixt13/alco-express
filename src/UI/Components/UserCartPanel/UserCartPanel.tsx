import { CartSVG } from '../SvgComponents/CartSVG'
import { UserSVG } from '../SvgComponents/UserSVG'
import sty from './UserCartPanel.module.scss'

export const UserCartPanel = () => {
	return (
		<div className={sty.topSide}>
			<div className={sty.topSideContainer}>
				<div className={sty.rightSide}>
					<div className={sty.userContainer}>
						<UserSVG className={sty.rightSideIcon} />
						<p>Login</p>
					</div>

					<div className={sty.cartContainer}>
						<CartSVG className={sty.rightSideIcon} />

						<div className={sty.cartCount}>
							<p>{'35'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
