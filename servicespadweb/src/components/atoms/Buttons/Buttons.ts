import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

export const ButtonLink = styled(Link)`
	margin: 0;
	text-decoration: none;
	color: #fff;
	border-radius: 20px;
	padding: 10px 30px;
	font-size: 20px;
	background: linear-gradient(117deg, rgba(49, 207, 112, 1),rgba(44, 185, 203, 1) );
`;

export const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;