interface Option {
	value: string
	label: string
}

export interface SelectProps {
	id?: string
	intialPlaceholder: string
	options: Array<Option>
	searcherPlaceholder: string
}
