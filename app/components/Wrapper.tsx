import { ReactNode } from 'react'
import { cn } from '../lib/utils'

type Props = {
	children: ReactNode
	className?: string
}

export const Wrapper = ({ children, className }: Props) => {
	return (
		<div className={cn('mx-auto max-w-7xl w-full px-2.5 md:px-10', className)}>
			{children}
		</div>
	)
}
