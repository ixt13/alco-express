import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { CartCounter } from '../CartCounter/CartCounter'
import { BinSVG } from '../SvgComponents/BinSVG'
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

					<button className={sty.deleteButton}>
						<BinSVG className={sty.binSvg} />
						<p>Delete</p>
					</button>
				</div>
				<div className={sty.bottomLine}>
					<div className={sty.priceContainer}>
						<p>price per bottle</p>
						<p className={sty.price}>
							<span className={sty.euro}>€</span>
							32.34
						</p>
					</div>

					<CartCounter />

					<div className={sty.priceContainer}>
						<p>total</p>
						<p className={sty.price}>
							<span className={sty.euro}>€</span>
							32.34
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
