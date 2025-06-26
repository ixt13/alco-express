import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { CartCounter } from '../CartCounter/CartCounter'
import sty from './CartItem.module.scss'
export const CartItem = () => {
	return (
		<div className={sty.item}>
			<div className={sty.imageContainer}>
				<Image src={bottleImage} className={sty.bottleImage} alt='bottle' />
			</div>
			<div className={sty.itemContainer}>
				<div className={sty.topLine}>
					<div className={sty.itemText}>
						<p>Brockmans</p>
						<p>Orange Kiss ,70 cl </p>
					</div>
					<p className={sty.price}>
						<span className={sty.euro}>€</span>
						32.34
					</p>
				</div>
				<div className={sty.bottomLine}>
					<CartCounter />

					<div className={sty.priceContainer}>
						<p className={sty.totalText}>Total</p>
						<p className={sty.totalPrice}>
							<span className={sty.euro}>€</span>
							32.34
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
