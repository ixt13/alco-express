export const taptic = () => {
	if (typeof window !== 'undefined' && 'navigator' in window) {
		const navigator = window.navigator
		if (navigator.vibrate) {
			navigator.vibrate(100)
		} else return
	}
}
