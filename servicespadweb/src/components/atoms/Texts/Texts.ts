import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
import { TitleProps, weights } from './texts.types';



export const TitleWithLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;

export const Title = styled('p')<TitleProps>`
	${props => props.primary && `
		color: red;
	`}
	${props => props.secondary && `
		color: blue;
	`}
	font-size: 20px;
	font-weight: ${props => props.weight ? weights[props.weight] : 'sm'};
`;

export const Subtitle = styled.h2`
	font-size: 18px;
	color: #2D314D;
	font-weight: 800;
`;

export const Text = styled.p`
	font-size: 16px;
	color: #2D314D;
	font-weight: 400;
`;

export const Label = styled.label`
	font-size: 16px;
	color: #2D314D;
	font-weight: 400;
`;