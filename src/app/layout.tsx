import { AppLayout } from '@/UI/Components/AppLayout/AppLayout'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.css'
const geistSans = Montserrat({
	subsets: ['latin'],
	weight: ['500'],
	display: 'swap',
})
// Faculty Glyphic
export const metadata: Metadata = {
	title: 'AlcoExpress',

	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.className}`}
				style={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
				}}
			>
				<AppLayout> {children}</AppLayout>
				{/* <Footer /> */}
			</body>
		</html>
	)
}
