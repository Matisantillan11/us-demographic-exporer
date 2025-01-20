'use client'
import { Bar } from 'recharts'
import { BarChart } from '../ui'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'
import { getTotalForeignPopulation, sumAllEnrolledRaces } from './utils'
import { formatNumberToLabel } from '~/app/utils'

export default function ChartForeignEnrolledByRace() {
	const { extraDetails, filters } = useDatafetchingContext()

	const percentageOfEnrolledForeignCitizens = (
		(sumAllEnrolledRaces(extraDetails?.enrollments) /
			getTotalForeignPopulation(extraDetails?.foreignPopulationByRace)) *
		100
	).toFixed(0)

	return (
		<div className='px-20'>
			<div className='w-full my-10 px-2'>
				<h2 className='font-bold'>Enrollments by race</h2>
				<p>
					In {filters?.year} there were {formatNumberToLabel(sumAllEnrolledRaces(extraDetails?.enrollments), true)}{' '}
					students enrolled in the United States, this number represents {percentageOfEnrolledForeignCitizens}% of the
					foreing citizens.
				</p>
			</div>

			<BarChart xAxisDataKey='race' data={extraDetails?.enrollments}>
				<Bar dataKey='enrollment_women' name='Women enrolled' fill='#ce0e0e' />
				<Bar dataKey='enrollment_male' name='Men enrolled' fill='#1453BC' />
			</BarChart>
		</div>
	)
}
