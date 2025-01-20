/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatNumberToLabel } from '~/app/utils'

export default function CustomTooltip({ active, payload }: any) {
	if (active && payload && payload.length) {
		return (
			<div className='bg-black border border-solid border-white p-2 text-white'>
				{payload?.map((info: any, index: number) => {
					const { name, dataKey, payload: internalPayload } = info
					console.log({ info })
					return (
						<p key={index}>
							{name}: {formatNumberToLabel(internalPayload?.[dataKey])}
						</p>
					)
				})}
			</div>
		)
	}

	return null
}
