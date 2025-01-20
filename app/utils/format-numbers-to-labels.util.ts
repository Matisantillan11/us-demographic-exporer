const MILLION = 1000000
const THOUSAND = 1000
const HUNDRED = 100

export const formatNumberToLabel = (numberToFormat: number, fullword = false): string => {
	if (numberToFormat > MILLION) {
		return `${(numberToFormat / MILLION).toFixed(0)}${fullword ? ' Million' : 'M'}`
	} else if (numberToFormat > THOUSAND) {
		return `${(numberToFormat / THOUSAND).toFixed(0)}${fullword ? ' Thousand' : 'K'}`
	} else if (numberToFormat > HUNDRED) {
		return `${(numberToFormat / HUNDRED).toFixed(0)}${fullword ? ' Hundred' : 'H'}`
	}

	return numberToFormat.toString()
}
