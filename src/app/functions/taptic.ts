export const taptic = (type: 'success' | 'error' | 'warning') => {
	if (
		typeof window !== 'undefined' &&
		'navigator' in window &&
		'vibrate' in window.navigator
	) {
		const navigator = window.navigator
		if (navigator.vibrate) {
			switch (type) {
				case 'success':
					navigator.vibrate(100)
					break
				case 'error':
					navigator.vibrate([100, 50, 100])
					break
				case 'warning':
					navigator.vibrate([100, 50, 100, 50, 100])
					break
			}
		}
	}
}
