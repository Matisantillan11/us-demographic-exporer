import { cva } from 'class-variance-authority'

export const drawerVariants = cva(
	'fixed z-50 gap-4 bg-[#1E1E1E] p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out overflow-auto',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0  data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom: 'inset-x-0 bottom-0  data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-full lg:w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
				right:
					'inset-y-0 right-0 h-full w-full lg:w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
)
