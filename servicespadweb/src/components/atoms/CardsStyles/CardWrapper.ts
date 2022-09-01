import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 200px 200px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 8px;
  background: #FFFFFF;
  text-align: center;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 40px;
	display: flex;
	flex-direction: column;
`;

