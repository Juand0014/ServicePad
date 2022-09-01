import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

type ButtonLinkProps = {
	color?: string;
	size?: string;
	background?: string;
	borderRadius?: string;
	padding?: string; 
};


export const ButtonLink = styled(Link)<ButtonLinkProps>`
	text-decoration: none;
	color: ${props => props.color || '#fff'};
	border-radius: ${props => props.borderRadius || '20px'};
	padding: ${props => props.padding || '10px 50px'};
	font-size: ${props => props.size || '10px'};
	background: ${props => props.background || 'linear-gradient(117deg, rgba(49, 207, 112, 1),rgba(44, 185, 203, 1) )'};
`;

export const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;