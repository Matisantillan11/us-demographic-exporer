import React from 'react'
import { cn } from '~/app/utils'

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />,
)
TableHeader.displayName = 'TableHeader'

export { TableHeader }
