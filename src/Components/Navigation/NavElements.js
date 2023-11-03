// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav
`
	position : fixed;
	background: black;
	color: white;

	width : 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	opacity: 1;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	color: white;

	&.active {
		color: white;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: white;

`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	color: white;

	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
	white-space: nowrap; */
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	color:white;
	/* Third Nav */
	/* justify-content: flex-end;
	width: 100vw; */
	
`;

export const NavBtnLink = styled(Link)`
	color:white;

	&:hover {
		transition: all 0.2s ease-in-out;
        color: rgb(55, 52, 52);
	}
`;

