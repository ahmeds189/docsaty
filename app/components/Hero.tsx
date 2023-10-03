import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Wrapper } from './Wrapper'
import Image from 'next/image'

export const Hero = () => {
	return (
		<Wrapper className='text-center flex flex-col items-center mt-32 mb-56'>
			<div className='bg-white text-zinc-700 w-fit rounded-full px-6 py-2.5 text-sm font-semibold shadow-md backdrop-blur border border-gray-200 transition-all hover:border-gray-300 hover:bg-white/50 mb-8'>
				Docsaty is now public!
			</div>

			<h1 className='text-intro font-bold [text-wrap:balance] leading-9 md:leading-[4rem]'>
				chat with your <br /> <span className='text-blue-600'>document</span> in
				seconds.
			</h1>

			<p className='text-small text-zinc-700 [text-wrap:balance] max-w-prose leading-6 mb-8 mt-6'>
				Docsaty allows you to have conversation with any PDF document. Simply
				upload your file and start asking question right away
			</p>

			<Link
				href='/dashboard'
				className={buttonVariants({ size: 'lg', className: 'group mb-20' })}
			>
				Get started
				<ArrowRight className='ml-2 group-hover:translate-x-2 transition-transform' />
			</Link>

			<div className='relative isolate'>
				<div
					aria-hidden='true'
					className='absolute inset-0 w-full -z-10 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 blur-3xl pointer-events-none animate-pulse'
				/>

				<div className='p-3 bg-gray-900/5 rounded-xl ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl sm:p-4 shadow-2xl'>
					<Image
						src='/app-preview.jpg'
						alt='app preview'
						width={1364}
						height={866}
						className='rounded-md shadow-2xl ring-1 ring-gray-900/10 selection:bg-transparent'
						priority={true}
						quality={100}
					/>
				</div>
			</div>
		</Wrapper>
	)
}
