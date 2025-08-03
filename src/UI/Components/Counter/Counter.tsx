'use client'

import { useState } from 'react'
import { CartSVG } from '../../SvgComponents/CartSVG'
import { MinusSvg } from '../../SvgComponents/MinusSvg'
import { PlusSvg } from '../../SvgComponents/PlusSvg'
import sty from './Counter.module.scss'

interface iCounter {
	className?: string
}

export const Counter = ({ className }: iCounter) => {
	const [quantity, setQuantity] = useState<number>(0)

	const handleIncrement = () => {
		setQuantity(prev => prev + 1)
	}
	const handleDecrement = () => {
		setQuantity(prev => {
			if (prev > 0) {
				return prev - 1
			}
			return prev
		})
	}

	return (
		<div className={`${sty.itemCounter} ${className}`}>
			<div className={sty.counter}>
				<button
					onClick={e => {
						e.preventDefault()
						handleDecrement()
					}}
				>
					<MinusSvg className={sty.quantityBtn} />
				</button>
				<div className={sty.quantityBox}>
					<p className={sty.quantity}>{quantity}</p>
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
			<div className={sty.cartBox}>
				<CartSVG className={sty.cartIcon} />
			</div>
		</div>
	)
}
