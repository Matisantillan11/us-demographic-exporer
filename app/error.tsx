'use client'
import { CloudAlert } from 'lucide-react'
import { Button } from './components'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<CloudAlert size={48} />
			<h2 className='font-bold text-xl my-4'>Oooops, our fault... something went wrong!</h2>

			<Button variant='outline' className='rounded-xl' onClick={() => reset()}>
				Try again
			</Button>
		</div>
	)
}
