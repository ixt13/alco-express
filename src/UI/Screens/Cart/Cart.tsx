import { CartItem } from '@/UI/Components/CartItem/CartItem'
import sty from './Cart.module.scss'
export const Cart = () => {
	return (
		<div className={sty.cartWrapper}>
			<div className={sty.itemsContainer}>
				<CartItem />
			</div>
			<div className={sty.checkoutContainer}> chheckoutSection</div>
		</div>
	)
}
