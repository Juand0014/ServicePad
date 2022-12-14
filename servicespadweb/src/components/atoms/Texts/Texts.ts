import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
import { sizes, sizesTitle, TitleProps, weights } from './texts.types';

export const TextLink = styled(Link)<TitleProps>`
text-decoration: none;
${props => props.primary && `
	color: #000;
`}
${props => props.secondary && `
	color: #fff;
`}
font-size: ${props => sizes[props.size || 'sm']};
font-weight: ${props => weights[props.weight || 'sm']};
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: underline;
	}
`;

export const Title = styled('p')<TitleProps>`
  padding: ${props => props.padding || '0'};
	margin: 0;	
${props => props.primary && `
		color: #000;
	`}
	${props => props.secondary && `
		color: #fff;
	`}
	font-size: ${props => sizesTitle[props.size || 'sm']};
	font-weight: ${props => weights[props.weight || 'sm']};
`;

export const Subtitle = styled.h2`
	font-size: 18px;
	color: #2D314D;
	font-weight: 800;
`;

export const Text = styled('p')<TitleProps>`
margin: 0;
padding: ${props => props.padding || '0'};
${props => props.primary && `
	color: #000;
`}
${props => props.secondary && `
	color: #fff;
`}

${props => props.tertiary && `
	color: rgba(149, 148, 153, 1);
`}

${props => props.danger && `
	color: #faa177
`}
font-size: ${props => sizes[props.size || 'sm']};
font-weight: ${props => weights[props.weight || 'sm']};
`;

export const Label = styled.label`
	font-size: 16px;
	color: #2D314D;
	font-weight: 400;
`;
