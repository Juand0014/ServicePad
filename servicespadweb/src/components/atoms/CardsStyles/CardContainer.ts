import styled from "@emotion/styled";

type CardContainerProps = {
	row?: boolean;
	column?: boolean;
  backgroundColor?: string;
  justifyContent?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
	flex-direction: ${props => props.row ? "row" : "column"};
  background-color: ${props => props.backgroundColor};
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;