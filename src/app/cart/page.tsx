import { CartItem } from '@/UI/Components/CartItem/CartItem'
import { Header } from '@/UI/Components/Header/Header'
import { TopSide } from '@/UI/Components/TopSide/TopSide'
import sty from './page.module.scss'
export default function Cart() {
	return (
		<div>
			<Header></Header>
			<TopSide cart={false} search={false}></TopSide>
			<div className={sty.cartBody}>
				<div className={sty.cartItemsContainer}>
					<CartItem></CartItem>
				</div>
				<div className={sty.cartTotalContainer}>999euro</div>
			</div>
		</div>
	)
}
