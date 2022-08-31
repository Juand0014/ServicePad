import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

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

export const Title = styled.h1`
	font-size: 20px;
	color: #2D314D;
	font-weight: 800;
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