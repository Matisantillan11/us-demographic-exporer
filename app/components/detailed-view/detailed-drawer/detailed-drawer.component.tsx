import { DialogProps } from '@radix-ui/react-dialog'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '../../ui'
import { DrawerContentProps } from '../../ui/drawer/drawer.types'
import { useDatafetchingContext } from '~/app/context/data-fetching.context'

interface DetailedDrawerProps extends DialogProps, DrawerContentProps {}

export default function DetailedDrawer(props: DetailedDrawerProps) {
	const { filters } = useDatafetchingContext()
	const { open, onOpenChange, children, defaultOpen, key, modal, ...drawerContentProps } = props
	const drawerProps = {
		children,
		defaultOpen,
		open,
		onOpenChange,
		modal,
	}

	return (
		<Drawer key={key} {...drawerProps}>
			<DrawerContent {...drawerContentProps}>
				<DrawerHeader>
					<DrawerTitle> Foreing born vs Natives of {filters?.year} </DrawerTitle>
				</DrawerHeader>
				{children}
			</DrawerContent>
		</Drawer>
	)
}
