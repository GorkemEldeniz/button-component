import { createGlobalStyle } from "styled-components";
import * as S from "../styled/index";
import { useEffect, useRef } from "react";

const Button = (props) => {
	const buttonRef = useRef(null);

	useEffect(() => {
		if (!props.active) {
			const mouseoverEvent = new MouseEvent("mouseover", {
				view: window,
				bubbles: true,
				cancelable: true,
			});
			buttonRef.current.dispatchEvent(mouseoverEvent);
		}
	}, []);

	return (
		<S.Button {...props} ref={buttonRef}>
			{props.startIcon && <img src={props.startIcon} />}{" "}
			{props.disabled ? "Disabled" : "Default"}
			{props.endIcon && <img src={props.endIcon} />}
		</S.Button>
	);
};

export { Button };
