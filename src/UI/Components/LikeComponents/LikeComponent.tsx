'use client'

import { HearthSVG } from '@/UI/SvgComponents/HearthSVG'
import { useState } from 'react'
import styles from './LikeComponent.module.scss'
type props = {
	className?: string
}

export const LikeComponent = ({ className }: props) => {
	const [isLiked, setIsLiked] = useState<boolean>(false)

	return (
		<HearthSVG
			setIsLiked={setIsLiked}
			className={`${className}   ${
				isLiked ? styles.liked : styles.isNotLiked
			}  `}
		/>
	)
}
