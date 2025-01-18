import { TableHead } from '../ui'

const formatKeyVale = (key: string) => {
	return key.replace(/ /g, '_').toLowerCase()
}

export const createTableColumns = (keys: Array<string>) => {
	return keys.map((key) => <TableHead key={`${formatKeyVale(key)}-columns`}>{key}</TableHead>)
}
