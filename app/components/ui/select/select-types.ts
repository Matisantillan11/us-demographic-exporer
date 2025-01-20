interface Option {
	value: string
	label: string
}

export interface SelectProps {
	id?: string
	value?: string
	intialPlaceholder: string
	handleSelection: (value: string) => void
	multiple?: boolean
	searcherPlaceholder: string
	options: Array<Option>
}
