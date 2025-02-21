import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './global.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'AlcoExpress',
	description: 'Wir bringen den Genuss zu Ihnen nach Hause!',
	icons: {
		icon: '/favico.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} `}>{children}</body>
		</html>
	)
}
