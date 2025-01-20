import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { TanstackWrapper } from './lib/tanstack-query/tanstack-wrapper'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'USA Demographic explorer',
	description: 'US demographic data explorer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}>
				<main>
					<TanstackWrapper>{children}</TanstackWrapper>
				</main>
			</body>
		</html>
	)
}
