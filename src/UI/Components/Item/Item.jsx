import bottleImage from '@/assets/images/brockmans.png'
import Image from 'next/image'
import { Counter } from '../Counter/Counter'
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
			<Counter className={sty.ItemCounterSize} />
		</div>
	)
}
