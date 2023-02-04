import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../images/devchallenges.png";
import styled from "styled-components";

const Nav = styled.nav`
	padding: 40px;
	background-color: #fafbfd;
	width: 20%;
	ol {
		padding: 0;
		width: fit-content;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		position: fixed;
		inset: 40px 40px;
		height: 70%;
		li {
			&:nth-child(1) {
				margin-bottom: 5rem;
				font-family: "Poppins", sans-serif;
				color: #090f31;
				span {
					color: #f7542e;
				}
			}
			a {
				color: #9e9e9e;
				font-family: "Noto Sans JP", sans-serif;
				&.active {
					color: #090f31;
				}
			}
		}
	}
`;

const Aside = () => {
	return (
		<Nav>
			<ol>
				<li>
					<span>Dev</span>challenges.io
				</li>
				<li>
					<NavLink to='colors'>Colors</NavLink>
				</li>
				<li>
					<NavLink to='typography'>Typography</NavLink>
				</li>
				<li>
					<NavLink to='spaces'>Spaces</NavLink>
				</li>
				<li>
					<NavLink to='buttons'>Buttons</NavLink>
				</li>
				<li>
					<NavLink to='Inputs'>Inputs</NavLink>
				</li>
				<li>
					<NavLink to='grid'>Grid</NavLink>
				</li>
			</ol>
		</Nav>
	);
};

export default Aside;
