import styled from "@emotion/styled";
import { ContainerType } from "./container.types";

export const Container = styled.div<ContainerType>`
	${props => 
		props.flex && `
			display: flex;
			flex-direction: ${props.flexDirection || ""};
			justify-content: ${props.justifyContent || ""};
			align-items: ${props.alignItems || ""};
		`
	};
	gap: ${props => props.gap};
	padding: ${props => props.padding || "0"};
	margin:  ${props => props.margin || "0"};
	background-color:  ${props => props.backgroundColor};
`;


