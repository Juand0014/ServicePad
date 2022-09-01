import styled from "@emotion/styled";

type CardContainerProps = {
	row?: boolean;
	column?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
	flex-direction: ${props => props.row ? "row" : "column"};
  background: #FAFAFA;
  overflow: hidden;
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;