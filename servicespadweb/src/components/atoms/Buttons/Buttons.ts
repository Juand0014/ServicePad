import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

type ButtonLinkProps = {
	color?: string;
	size?: string;
	backGround?: string;
	borderRadius?: string;
	padding?: string; 
};


export const ButtonLink = styled(Link)<ButtonLinkProps>`
	margin: 0;
	text-decoration: none;
	color: ${props => props.color || '#fff'};
	border-radius: ${props => props.borderRadius || '20px'};
	padding: ${props => props.padding || '10px 30px'};
	font-size: ${props => props.size || '20px'};
	background: ${props => props.color || 'linear-gradient(117deg, rgba(49, 207, 112, 1),rgba(44, 185, 203, 1) )'};
`;

export const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;