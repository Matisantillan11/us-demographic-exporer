import { DialogProps } from '@radix-ui/react-dialog'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '../ui'
import { DrawerContentProps } from '../ui/drawer/drawer.types'

interface DetailedDrawerProps extends DialogProps, DrawerContentProps {}

export const DetailedDrawer = (props: DetailedDrawerProps) => {
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
					<DrawerTitle>Detailed Drawer</DrawerTitle>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	)
}
