'use client'

import { useState } from 'react'
import { BinSVG } from '../SvgComponents/BinSVG'
import { MinusSvg } from '../SvgComponents/MinusSvg'
import { PlusSvg } from '../SvgComponents/PlusSvg'
import sty from './CartCounter.module.scss'

export const CartCounter = () => {
	const [quantity, setQuantity] = useState<number>(1)

	const handleIncrement = () => {
		setQuantity(prev => prev + 1)
	}
	const handleDecrement = () => {
		setQuantity(prev => {
			if (prev > 1) {
				return prev - 1
			}
			return prev
		})
	}

	return (
		<div className={sty.counter}>
			<button
				onClick={e => {
					e.preventDefault()
					handleDecrement()
				}}
			>
				{quantity > 1 ? (
					<MinusSvg className={sty.quantityBtn} />
				) : (
					<BinSVG className={sty.quantityBtnBin} />
				)}
			</button>
			<div className={sty.quantityBox}>
				<p className={sty.quantityValue}>{quantity}</p>
			</div>

			<button
				onClick={e => {
					e.preventDefault()
					handleIncrement()
				}}
			>
				<PlusSvg className={sty.quantityBtn} />
			</button>
		</div>
	)
}
