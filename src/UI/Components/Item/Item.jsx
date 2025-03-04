import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { CartSVG } from '../SvgComponents/CartSVG'
import sty from './Item.module.scss'
export const Item = () => {
	return (
		<div className={sty.item}>
			<div className={sty.itemNameTextContent}>
				<p className={sty.brandName}>Brockmans</p>
				<p className={sty.secondText}>Orange Kiss</p>
				<p className={sty.secondText}>70 cl</p>
			</div>

			<Image src={bottleImage} className={sty.bottleImage} alt='bottle' />
			<p className={sty.secondText}>€32.34</p>
			<div className={sty.itemCounter}>
				<div className={sty.counter}>+1-</div>
				<div className={sty.cartBox}>
					<CartSVG className={sty.cartIcon}></CartSVG>
				</div>
			</div>
		</div>
	)
}
