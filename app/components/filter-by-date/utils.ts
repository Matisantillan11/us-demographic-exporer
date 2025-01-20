export const getValuesForFilter = (value: string) => {
	if (value.includes(',')) {
		return value
			.split(',')
			.map((itemValue) => itemValue.trim())
			.join(',')
	}

	return value
}
