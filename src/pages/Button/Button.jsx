// import { useEffect } from "react";
import styled from "styled-components";
import { Button as ButtonWidget } from "../../components/Button";
import Icon from "../../../images/shopping_cart_black_24dp.svg";

const Div = styled.div`
	padding: 50px;
	h1 {
		font-size: 24px;
		font-family: Poppins, sans-serif;
		font-weight: 500;
		color: #4f4f4f;
		margin-bottom: 28px;
	}
`;

const SubGrid = styled.div`
	width: 70%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem 1rem;
	margin-bottom: 4rem;
	div.disable {
		grid-column: span 2;
	}
	div {
		p {
			font-family: "Ubuntu Mono", monospace;
			font-weight: 400;
			font-size: 1rem;
			margin-bottom: 1rem;
			&.state {
				color: #828282;
			}
		}
	}
`;

const SubGridSecond = styled.div`
	width: 70%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap:1rem;
	margin-bottom:4rem;
	div {
		p {
			font-family: "Ubuntu Mono", monospace;
			font-weight: 400;
			font-size: 1rem;
			margin-bottom: 1rem;
			&.state {
				color: #828282;
			}
		}
`;

const SubGridThird = styled.div`
	display: grid;
	grid-template-columns: repeat(4,1fr);
	gap:4rem 1rem;
	div {
		p {
			font-family: "Ubuntu Mono", monospace;
			font-weight: 400;
			font-size: 1rem;
			margin-bottom: 1rem;
			&.state {
				color: #828282;
			}
		}
`;

export const Button = () => {
	return (
		<Div>
			<h1>Buttons</h1>
			<SubGrid>
				<div>
					<p>{"<Button />"}</p>
					<ButtonWidget />
				</div>

				<div>
					<p className='state'>&:hover, &:focus</p>
					<ButtonWidget active={true} />
				</div>

				<div>
					<p>{"<Button variant='outline' />"}</p>
					<ButtonWidget variant='outline' />
				</div>

				<div>
					<p className='state'>&:hover, &:focus</p>
					<ButtonWidget variant='outline' />
				</div>

				<div>
					<p>{"<Button variant='text' />"}</p>
					<ButtonWidget variant='text' />
				</div>

				<div>
					<p className='state'>&:hover, &:focus</p>
					<ButtonWidget variant='text' />
				</div>

				<div className='disable'>
					<p>{"<Button disableShadow />"}</p>
					<ButtonWidget disableShadow />
				</div>

				<div>
					<p>{"<Button disabled />"}</p>
					<ButtonWidget disabled />
				</div>

				<div>
					<p>{"<Button disabled variant='text' />"}</p>
					<ButtonWidget disabled variant='text' />
				</div>

				<div>
					<p>{"<Button startIcon='local_grocery_store'  />"}</p>
					<ButtonWidget color='primary' startIcon={Icon} />
				</div>

				<div>
					<p>{"<Button endIcon='local_grocery_store'  />"}</p>
					<ButtonWidget color='primary' endIcon={Icon} />
				</div>
			</SubGrid>

			<SubGridSecond>
				<div>
					<p>{"<Button size='sm'/>"}</p>
					<ButtonWidget color='primary' size='sm' />
				</div>

				<div>
					<p>{"<Button size='md'/>"}</p>
					<ButtonWidget color='primary' size='md' />
				</div>

				<div>
					<p>{"<Button size='lg'/>"}</p>
					<ButtonWidget color='primary' size='lg' />
				</div>
			</SubGridSecond>

			<SubGridThird>
				<div>
					<p>{"<Button color='default'/>"}</p>
					<ButtonWidget />
				</div>

				<div>
					<p>{"<Button color='primary'/>"}</p>
					<ButtonWidget color='primary' />
				</div>

				<div>
					<p>{"<Button color='secondary'/>"}</p>
					<ButtonWidget color='secondary' />
				</div>

				<div>
					<p>{"<Button color='danger'/>"}</p>
					<ButtonWidget color='danger' />
				</div>

				<div>
					<p>&:hover , &:focus</p>
					<ButtonWidget />
				</div>

				<div>
					<p>{" "}</p>
					<ButtonWidget color='primary' />
				</div>

				<div>
					<p>{" "}</p>
					<ButtonWidget color='secondary' />
				</div>

				<div>
					<p>{" "}</p>
					<ButtonWidget color='danger' />
				</div>
			</SubGridThird>
		</Div>
	);
};
