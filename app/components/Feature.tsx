import Image from 'next/image'
import { Wrapper } from './Wrapper'

const steps = [
	{
		step: 1,
		emoji: '💻',
		heading: 'Sign up for an account',
		desc: 'Either starting out with free plane or choose our pro plan.',
		redirect: true,
	},
	{
		step: 2,
		emoji: '📂',
		heading: 'Upload your PDF file',
		desc: `We'll process your file and make it ready for you to chat with.`,
	},
	{
		step: 3,
		emoji: '🤔',
		heading: 'Start asking questions',
		desc: `it's that simple. try out Docsaty today. it really takes less than a minute.`,
	},
]

export const Feature = () => {
	return (
		<Wrapper>
			<h2 className='text-4xl md:text-center sm:text-5xl font-bold [text-wrap:balance] mb-4'>
				start chatting <br className='md:hidden' /> in minutes
			</h2>
			<p className='text-zinc-700 sm:text-lg [text-wrap:balance] mb-10 md:text-center'>
				chatting to your PDF files has <br className='md:hidden' /> never been
				easier than with Docsaty.
			</p>

			<ol className='flex flex-col gap-6 lg:flex-row'>
				{steps.map((step) => (
					<li
						key={step.step}
						className='p-3 px-6 lg:px-3 lg:flex-1 xl:p-6 rounded-lg ring-1 ring-gray-700/10 shadow-sm relative overflow-hidden'
					>
						<span>step {step.step}</span>
						<h3 className='font-semibold text-lg mt-3 mb-4'>
							{step.heading} {step.emoji}
						</h3>
						<p className='[text-wrap:balance] text-zinc-700'>{step.desc}</p>
						<div className='absolute inset-0 -top-36 w-full h-full rounded-full bg-gradient-to-r from-[#ff80b5] to-[#1a4dd8] pointer-events-none blur-3xl opacity-10' />
					</li>
				))}
			</ol>

			<div className='p-3 bg-gray-900/5 rounded-xl ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl sm:p-4 shadow-2xl my-20'>
				<Image
					src='/file-upload-preview.jpg'
					alt='uploading preview'
					width={1419}
					height={732}
					className='rounded-md ring-1 ring-gray-900/10 selection:bg-transparent'
					priority={true}
					quality={100}
				/>
			</div>
		</Wrapper>
	)
}
