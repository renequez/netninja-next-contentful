import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<header>
				<Link href='/'>
					<a>
						<h1>
							<span>Just Add</span>
							<span>Marmite</span>
						</h1>
						<h2>Spread The Joy</h2>
					</a>
				</Link>
			</header>

			<div className='page-content'>{children}</div>

			<footer>
				<p>
					© 2021{' '}
					<Link href='/'>
						<a>NetNinja Next Contentful Tutorial</a>
					</Link>{' '}
					- No rights are reserved. Do whatever you want with this.
				</p>
			</footer>
		</div>
	);
}
