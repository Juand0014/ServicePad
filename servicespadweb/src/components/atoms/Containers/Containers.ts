import styled from "@emotion/styled";
import { ContainerType } from "./container.types";

export const Container = styled.div<ContainerType>`
	width: ${props => props.width || "auto"};
	height: ${props => props.height || "auto"};
	${props => 
		props.flex && `
			display: flex;
			flex-direction: ${props.flexDirection || ""};
			justify-content: ${props.justifyContent || ""};
			align-items: ${props.alignItems || ""};
		`
	};
	padding: ${props => props.padding || "0"};
	margin: 0;
`;


