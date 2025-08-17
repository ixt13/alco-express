export const useLocalStorage = () => {
	const favoritesList = localStorage.getItem('favoritesList')

	return { favoritesList }
}
