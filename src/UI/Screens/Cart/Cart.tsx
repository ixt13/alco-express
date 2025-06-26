import { CartItem } from '@/UI/Components/CartItem/CartItem'
import { CheckoutContainer } from '@/UI/Components/CheckoutContainer/CheckoutContainer'
import { SeparatorLine } from '@/UI/Components/SeparatorLine/SeparatorLine'
import sty from './Cart.module.scss'
export const Cart = () => {
	return (
		<>
			<SeparatorLine />
			<h3 className={sty.h3Title}>All Products</h3>
			<div className={sty.cartWrapper}>
				<div className={sty.itemsContainer}>
					<CartItem /> <CartItem /> <CartItem /> <CartItem />
				</div>
				<CheckoutContainer />
			</div>
		</>
	)
}
