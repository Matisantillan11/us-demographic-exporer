const MILLION = 1000000
const THOUSAND = 1000
const HUNDRED = 100

export const formatNumberToLabel = (numberToFormat: number): string => {
	if (numberToFormat > MILLION) {
		return `${(numberToFormat / MILLION).toFixed(0)}M`
	} else if (numberToFormat > THOUSAND) {
		return `${(numberToFormat / THOUSAND).toFixed(0)}K`
	} else if (numberToFormat > HUNDRED) {
		return `${(numberToFormat / HUNDRED).toFixed(0)}M`
	}

	return numberToFormat.toString()
}
