import Head from 'next/head'
import Navbar from './components/Navbar'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Jirah Mae</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<h1>GREETS</h1>
		</div>
	)
}
