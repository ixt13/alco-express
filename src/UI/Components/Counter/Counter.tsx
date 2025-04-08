import { CartSVG } from '../SvgComponents/CartSVG'
import sty from './Counter.module.scss'

interface iCounter {
	className?: string
}

export const Counter = ({ className }: iCounter) => {
	return (
		<div className={`${sty.itemCounter} ${className}`}>
			<div className={sty.counter}>+1-</div>
			<div className={sty.cartBox}>
				<CartSVG className={sty.cartIcon}></CartSVG>
			</div>
		</div>
	)
}
