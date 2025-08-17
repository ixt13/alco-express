import { useEffect, useState } from 'react'

export const useLocalStorage = () => {
	const [favoritesList, setFavoritesList] = useState<[] | null>(null)

	useEffect(() => {
		const items = localStorage.getItem('favoritesList')

		setFavoritesList(items ? JSON.parse(items) : [])
	}, [])

	return { favoritesList }
}
