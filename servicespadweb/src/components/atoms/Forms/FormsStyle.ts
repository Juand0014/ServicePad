import styled from "@emotion/styled";

type FormProps = {
	flex?: boolean;
	justifyContent?: string;
	flexDirection?: string;
}

export const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 0;

.form-group{
	
}

.required{
	border-color: red;
}

.required-label {
	color: red;
}
`;

export const Forms = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
	border-radius: 41px;
	padding: 40px;
`;

export const FormGroup = styled.div<FormProps>`
	${props => props.flex && `
		display: flex;
		flex-direction: ${props.flexDirection || 'row'};
	
	`};
	margin-bottom: 10px;
	> textarea {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px;
		width: 400px;
		height: 150px;
		background: #FFFFFF;
		border: 1px solid #D1D5DB;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 6px;
	}
`;

export const Label = styled.label`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #2D314E;
	flex: none;
	order: 0;
	flex-grow: 0;

	.required {
		color: red;
		font-weight: 900;
	}
`;

export const Input = styled.input`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 10px;
	width: 400px;
	background: #FFFFFF;
	border: 1px solid #D1D5DB;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 6px;
	flex: none;
	order: 1;
	align-self: stretch;
	flex-grow: 0;
`;