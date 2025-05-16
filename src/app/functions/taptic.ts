export const taptic = (type: 'success' | 'error' | 'warning') => {
	if (typeof window !== 'undefined' && 'navigator' in window) {
		const navigator = window.navigator as any
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
