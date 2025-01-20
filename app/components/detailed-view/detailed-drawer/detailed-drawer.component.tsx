'use client'
import { DialogProps } from '@radix-ui/react-dialog'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '../../ui'
import { DrawerContentProps } from '../../ui/drawer/drawer.types'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'

interface DetailedDrawerProps extends DialogProps, DrawerContentProps {
	handleDrawerState: (year?: string) => void
}

export default function DetailedDrawer(props: DetailedDrawerProps) {
	const { filters } = useDatafetchingContext()
	const { open, children, defaultOpen, key, modal, handleDrawerState, ...drawerContentProps } = props
	const drawerProps = {
		children,
		defaultOpen,
		open,
		modal,
	}

	const onOpenChange = () => {
		handleDrawerState()
	}

	return (
		<Drawer key={key} onOpenChange={onOpenChange} {...drawerProps}>
			<DrawerContent {...drawerContentProps}>
				<DrawerHeader>
					<DrawerTitle> Foreing born vs Natives of {filters?.year} </DrawerTitle>
				</DrawerHeader>
				{children}
			</DrawerContent>
		</Drawer>
	)
}
