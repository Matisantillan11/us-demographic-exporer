'use client'
import { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command'
import { cn } from '~/app/utils'
import { Button } from '../button'
import { SelectProps } from './select-types'

const MAX_LENGTH = 20

const Select = ({
	id,
	intialPlaceholder,
	options,
	searcherPlaceholder,
	handleSelection,
	multiple = false,
	value,
}: SelectProps) => {
	const [open, setOpen] = useState(false)
	const [internalValue, setInternalValue] = useState(value ? value : '')

	const removeSelectedItem = (item: string) => {
		const itemsArray = internalValue.split(',').map((item) => item.trim())
		const updatedItems = itemsArray.filter((currentItem) => currentItem !== item)
		return updatedItems.join(', ')
	}

	const onMultipleSelect = (item: string) => {
		if (internalValue.includes(item)) {
			setInternalValue((prevValue) => (prevValue.includes(',') ? removeSelectedItem(item) : ''))
		} else {
			if (internalValue.length === 0) {
				setInternalValue(item as string)
			} else {
				setInternalValue((prevValue) => `${prevValue}, ${item}`)
			}
		}
	}

	const onHandleSelection = (currentValue: string) => {
		const item = options?.find((option) => option.value === currentValue)?.label as string

		if (multiple) {
			onMultipleSelect(item)
		} else {
			setInternalValue((prevValue) => (prevValue === item ? '' : item))
		}
	}

	const checkItemSelected = (item: string) => {
		const itemsArray = internalValue.split(',').map((item) => item.trim())
		return itemsArray.some((currentItem) => currentItem === item)
	}

	const transformValue = (value: string) => {
		if (internalValue.length > MAX_LENGTH) {
			return internalValue.slice(0, MAX_LENGTH) + '...'
		}

		return value
	}

	useEffect(() => {
		if (internalValue) {
			handleSelection(internalValue)
		}
	}, [internalValue])

	console.log({ internalValue })

	return (
		<Popover open={open} onOpenChange={setOpen} key={id}>
			<PopoverTrigger asChild>
				<Button variant='ghost' role='combobox' aria-expanded={open} className='w-[200px] justify-between bg-accent'>
					{value ? transformValue(value) : intialPlaceholder}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='min-w-52 max-w-80 p-0 bg-[#1E1E1E]'>
				<Command>
					<CommandInput placeholder={searcherPlaceholder} />
					<CommandList>
						<CommandEmpty>No options found.</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									className='hover:cursor-pointer hover:bg-gray-600 hover:text-accent-foreground flex justify-between'
									key={option.value}
									value={option.value}
									onSelect={(currentValue) => {
										onHandleSelection(currentValue)
									}}>
									{option.label}
									<Check
										className={cn('mr-2 h-4 w-4', checkItemSelected(option.label) ? 'opacity-100' : 'opacity-0')}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export { Select }
