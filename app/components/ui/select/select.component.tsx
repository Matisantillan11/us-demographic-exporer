'use client'
import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command'
import { cn } from '~/app/utils'
import { Button } from '../button'
import { SelectProps } from './select-types'

const Select = ({ id, intialPlaceholder, options, searcherPlaceholder }: SelectProps) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<Popover open={open} onOpenChange={setOpen} key={id}>
			<PopoverTrigger asChild>
				<Button variant='ghost' role='combobox' aria-expanded={open} className='w-[200px] justify-between bg-accent'>
					{value ? options.find((option) => option.value === value)?.label : intialPlaceholder}
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
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									}}>
									{option.label}
									<Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
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
