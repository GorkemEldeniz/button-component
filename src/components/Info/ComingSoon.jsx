import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
	padding: 1rem;
	a {
		color: #9e9e9e;
		font-family: "Noto Sans JP", sans-serif;
	}
	h1 {
		font-size: 4rem;
		font-family: Poppins, sans-serif;
		font-weight: 500;
		color: #4f4f4f;
	}
`;

export const ComingSoon = () => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<Div>
			<h1>Coming Soon...</h1>
			<a onClick={handleClick}>Go Back</a>
		</Div>
	);
};
