import styled, { css, createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
	font-size:14px;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
a{
  text-decoration:none;
}
button,a,input {
	cursor:pointer;
}

`;

const Button = styled.button`
	display: flex;
	gap: 0.5rem;
	font-size: 14px;
	font-family: "Noto Sans JP", sans-serif;
	font-weight: 500;
	align-items: center;
	padding: ${(props) =>
		props.size == "sm"
			? "6px 12px"
			: props.size == "md"
			? "8px 16px"
			: props.size == "lg"
			? "11px 22px"
			: "8px 16px"};
	background: ${(props) =>
		props.variant
			? "#FFFF"
			: props.color == "primary"
			? "#2962FF"
			: props.color == "secondary"
			? "#455A64"
			: props.color == "danger"
			? "#D32F2F"
			: "#e0e0e0"};
	box-shadow: ${(props) =>
		props.variant || props.disableShadow || props.disabled
			? null
			: "0px 2px 3px rgba(51, 51, 51, 0.2)"};
	border-radius: 6px;
	color: ${(props) =>
		props.disabled
			? "#9E9E9E"
			: props.variant
			? "#3D5AFE"
			: props.color && props.color != "default"
			? "#FFF"
			: "#3f3f3f"};
	border: none;
	outline: ${(props) =>
		props.variant == "outline"
			? "1px solid #3D5AFE"
			: props.variant == "text"
			? "none"
			: null};
	& {
		img {
			max-height: 1rem;
			object-fit: contain;
		}
	}
	&:hover,
	&:focus {
		background-color: ${(props) =>
			props.disabled
				? null
				: props.variant
				? "rgba(41, 98, 255, 0.1)"
				: props.color == "primary"
				? "#0039CB"
				: props.color == "secondary"
				? "#1C313A"
				: props.color == "danger"
				? "#9A0007"
				: "#AEAEAE"};
	}
`;

export { Button, globalStyle };
