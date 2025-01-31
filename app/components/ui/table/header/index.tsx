import React from 'react'

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => <thead ref={ref} className={className} {...props} />,
)
TableHeader.displayName = 'TableHeader'

export { TableHeader }
