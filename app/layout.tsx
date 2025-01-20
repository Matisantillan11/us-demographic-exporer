import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { TanstackWrapper } from './lib/tanstack-query/tanstack-wrapper'
import Link from 'next/link'

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
				<footer className='w-full flex items-center justify-center mt-5'>
					<p>
						The information used of this website is public and you can reach it in the following link:
						<span className='mx-1'>
							<Link href='https://datausa.io/' target='_blank'>
								https://datausa.io/
							</Link>
						</span>{' '}
					</p>
				</footer>
			</body>
		</html>
	)
}
