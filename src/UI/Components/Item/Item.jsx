import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { Counter } from '../Counter/Counter'
import sty from './Item.module.scss'
export const Item = () => {
	return (
		<div className={sty.item}>
			<div className={sty.itemName}>
				<p>Brockmans</p>
				<p>Orange Kiss ,70 cl </p>
			</div>
			<div className={sty.image}>
				<Image src={bottleImage} className={sty.imageSource} alt='bottle' />
			</div>

			<div className={sty.price}>
				<p className={sty.valute}>€</p>
				<p className={sty.pric}>32.34</p>
			</div>

			<Counter className={sty.ItemCounterSize} />
		</div>
	)
}
