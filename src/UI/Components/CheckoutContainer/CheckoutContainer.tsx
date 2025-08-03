import Link from 'next/link'
import sty from './CheckoutContainer.module.scss'

export const CheckoutContainer = () => {
	return (
		<div className={sty.checkoutWrapper}>
			<div className={sty.checkoutContainer}>
				<h3>Summary</h3>
				<div className={sty.checkoutItem}>
					<p>Subtotal</p>
					<p className={sty.price}>
						<span className={sty.euro}>€</span>
						32.34
					</p>
				</div>
				<div className={sty.checkoutItem}>
					<p>Delivery</p>
					<p className={sty.price}>
						<span className={sty.euro}>€</span>
						10
					</p>
				</div>
				<div className={sty.totalContainer}>
					<div className={sty.total}>
						<div className={sty.totalItem}>
							<p className={sty.totalText}>Total</p>
							<p className={sty.totalPrice}>
								<span className={sty.totalEuro}>€</span>
								42.34
							</p>
						</div>
					</div>
				</div>
			</div>

			<Link href={'/delivery'} className={sty.toDeliveryBtn}>
				<button className={sty.checkoutBtn}>
					<p>Checkout</p>
				</button>
			</Link>
		</div>
	)
}
