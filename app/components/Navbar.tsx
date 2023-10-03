import Link from 'next/link'
import { Wrapper } from './Wrapper'
import { buttonVariants } from './ui/button'
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'

export const Navbar = () => {
	return (
		<nav className='sticky inset-0 z-30 bg-white/75 border-b border-gray-300 backdrop-blur-lg'>
			<Wrapper className='flex h-14 items-center gap-2'>
				<Link href='/' className='font-semibold me-auto'>
					Docsaty.
				</Link>

				<Link
					href='/pricing'
					className={buttonVariants({ variant: 'ghost', size: 'sm' })}
				>
					Pricing
				</Link>

				<LoginLink className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
					sign in
				</LoginLink>
				<RegisterLink className={buttonVariants({ size: 'sm' })}>
					Get started
				</RegisterLink>
			</Wrapper>
		</nav>
	)
}
