import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { VariantProps } from 'class-variance-authority'
import { drawerVariants } from './drawer-variants'

export interface DrawerContentProps
	extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
		VariantProps<typeof drawerVariants> {}
