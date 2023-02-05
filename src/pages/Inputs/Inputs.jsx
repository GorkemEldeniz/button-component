import React from "react";
import { ComingSoon } from "../../components/Info/ComingSoon";
import { Div } from "../Button/Button";
import styled from "styled-components";

const FakeInput = styled.div`
	border: 1px solid #828282;
	border-radius: 8px;
	padding: 18px 12px;
	font-family: "Noto Sans JP";
	font-weight: 500;
	width: 80%;
	font-size: 14px;
	display: flex;
	gap: 1rem;
	color: #828282;
	align-items: center;
	&.end {
		justify-content: space-between;
	}
`;

const TextArea = styled.textarea`
	border: 1px solid #828282;
	border-radius: 8px;
	padding: 18px 12px;
	font-family: "Noto Sans JP";
	font-weight: 500;
	display: block;
	resize: none;
	outline: none;
`;

const Input = styled.input`
	border: 1px solid #828282;
	display: block;
	border-radius: 8px;
	padding: 18px 12px;
	font-family: "Noto Sans JP";
	font-weight: 500;
	width: 80%;
	font-size: 14px;
	outline: none;
	&.full {
		width: 100%;
	}
	&.sm {
		padding: 10px 12px;
	}
	&.hover {
		border: 1px solid #333333;
	}
	&.focus {
		border: 1px solid #2962ff;
	}
	&.error {
		border: 1px solid #d32f2f;
	}
	&.disabled {
		background-color: #f2f2f2;
		width: 40%;
	}
`;

const SubDiv = styled.div`
	&.disabled,
	&.text {
		grid-column: span 2;
	}
	label {
		margin-bottom: 2rem;
		&.focus {
			color: #2962ff;
		}
		&.error {
			color: #d32f2f;
		}
	}
	p,
	label {
		font-family: "Ubuntu Mono", monospace;
		font-weight: 400;
		font-size: 1rem;
		margin-bottom: 1rem;
		&.state {
			color: #828282;
		}
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem 0;
	margin-bottom: 2rem;
`;

const SecondGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem 0;
`;

export const Inputs = () => {
	return (
		<Div>
			<h1>Inputs</h1>
			<Grid>
				<SubDiv>
					<p>{"<Input />"}</p>
					<label htmlFor=''>Label</label>
					<Input placeholder='Placeholder' />
				</SubDiv>

				<SubDiv>
					<p className='state'>&:hover</p>
					<label htmlFor=''>Label</label>
					<Input className='hover' placeholder='Placeholder' />
				</SubDiv>

				<SubDiv>
					<p className='state'>&:focus</p>
					<label className='focus' htmlFor=''>
						Label
					</label>
					<Input className='focus' placeholder='Placeholder' />
				</SubDiv>

				<SubDiv>
					<p className='state'>{"<Input error />"}</p>
					<label className='error' htmlFor=''>
						Label
					</label>
					<Input className='error' placeholder='Placeholder' />
				</SubDiv>

				<SubDiv>
					<p className='state'>&:hover</p>
					<label htmlFor=''>Label</label>
					<Input className='hover' placeholder='Placeholder' />
				</SubDiv>

				<SubDiv>
					<p className='state'>&:focus</p>
					<label className='error' htmlFor=''>
						Label
					</label>
					<Input className='error' placeholder='Placeholder' />
				</SubDiv>

				<SubDiv className='disabled'>
					<p>{"<Input disabled />"}</p>
					<label htmlFor=''>Label</label>
					<Input className='disabled' placeholder='Placeholder' />
				</SubDiv>
			</Grid>

			<SecondGrid>
				<SubDiv>
					<p>{"<Input startIcon />"}</p>
					<label htmlFor=''>Label</label>
					<FakeInput>
						<span className='material-symbols-outlined'>call</span> Placeholder
					</FakeInput>
				</SubDiv>

				<SubDiv>
					<p>{"<Input endIcon />"}</p>
					<label htmlFor=''>Label</label>
					<FakeInput className='end'>
						Placeholder <span class='material-symbols-outlined'>lock</span>
					</FakeInput>
				</SubDiv>

				<SubDiv className='text'>
					<p>{"<Input value='text' />"}</p>
					<label htmlFor=''>Label</label>
					<Input placeholder='Placeholder' value='Text' />
				</SubDiv>

				<SubDiv>
					<p>{"<Input size='sm' />"}</p>
					<label htmlFor=''>Label</label>
					<Input placeholder='Placeholder' className='sm' />
				</SubDiv>

				<SubDiv>
					<p>{"<Input size='md' />"}</p>
					<label htmlFor=''>Label</label>
					<Input placeholder='Placeholder' />
				</SubDiv>

				<SubDiv className='text'>
					<p>{"<Input fullWidth />"}</p>
					<label htmlFor=''>Label</label>
					<Input className='full' placeholder='Placeholder' value='Text' />
				</SubDiv>

				<SubDiv className='text'>
					<p>{"<Input multiline row='4' />"}</p>
					<label htmlFor=''>Label</label>
					<TextArea placeholder='Placeholder' rows='4' />
				</SubDiv>
			</SecondGrid>
		</Div>
	);
};
