import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { Counter } from '../Counter/Counter'
import sty from './CartItem.module.scss'

export const CartItem = () => {
	return (
		<div className={sty.item}>
			<div className={sty.imageContainer}>
				<Image src={bottleImage} className={sty.bottleImage} alt='bottle' />
			</div>

			<div className={sty.itemTextContent}>
				<div className={sty.itemText}>
					<p>Brockmans</p>
					<p>Orange Kiss ,70 cl </p>
				</div>
				<p className={sty.secondText}>€32.34</p>
			</div>
			<div className={sty.cartCounterContainer}>
				<Counter className={sty.cartCounter} />
			</div>

			<div className={sty.totalAndDelete}>
				<button>delete</button> <p className={sty.secondText}>€32.34</p>
			</div>
		</div>
	)
}
