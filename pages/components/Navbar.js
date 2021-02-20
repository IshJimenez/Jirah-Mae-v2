import React, { useState } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
	clip-path: circle(800px at 90% -10%);
	position: absolute;
	height: ${(props) => (props.open ? '80vh' : 0)};
	width: 100vw;
	background: #1c2022;
	transition: height 0.4s ease-in-out;
	@media (min-width: 769px) {
		display: none;
	}
`
const OverlayMenu = styled.ul`
	list-style: none;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -100%);
	li {
		opacity: ${(props) => (props.open ? 1 : 0)};
		font-size: 25px;
		margin: 50px 0px;
		transition: opacity 0.4s ease-in-out;
	}

	li:nth-child(2) {
		margin: 50px 0px;
	}
`

const Navbar = () => {
	const [toggle, toggleNav] = useState(false)
	return (
		<>
			<nav className='nav'>
				<h1 className='logo'>jM</h1>
				<ul className='menu'>
					<li>
						<a className='link' target='#' href='/'>
							Home
						</a>
					</li>
					<li>
						<a className='link' target='#' href='/'>
							About Me
						</a>
					</li>
					<li>
						<a className='link' target='#' href='/'>
							Case Study
						</a>
					</li>
				</ul>
				<button className='navIcon' onClick={() => toggleNav(!toggle)}>
					<span className='line' open={toggle} />
					<span className='line' open={toggle} />
					<span className='line' open={toggle} />
				</button>
			</nav>
			<Overlay open={toggle}>
				<OverlayMenu open={toggle}>
					<li>
						<a className='link' target='#' href=''>
							Home
						</a>
					</li>
					<li>
						<a className='link' target='#' href=''>
							About Me
						</a>
					</li>
					<li>
						<a className='link' target='#' href=''>
							Case Study
						</a>
					</li>
				</OverlayMenu>
			</Overlay>
		</>
	)
}

export default Navbar
