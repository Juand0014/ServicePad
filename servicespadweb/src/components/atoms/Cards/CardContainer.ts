import styled from "@emotion/styled";
import { CardArticlesProps } from "./Card.types";

export const CardsContainerArticles = styled.div<CardArticlesProps>`
	display: flex;
	flex-direction: ${props => props.flexDirection || 'row'};
	justify-content: space-between;
	width: 100%;

	.card_articles {
		width: calc(100% / 3 - 1rem);
		margin: 0.5rem;
		border-radius: ${props => props.borderRadius || '0.5rem'};
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		background-color: ${props => props.color || '#FFFFFF'};
		&:hover {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		}

		.card_header_articles img {
			width: 100%;
			height: 200px;
			object-fit: cover;
		}
	}
`;

export const CardBodyArticles = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px 0 ;
  min-height: 180px;
	word-break: break-all;

	> span {
		font-size: 13px;
		color: #999;
	}
`;

export const CardsContainerBenefits = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;

	.card {
		display: flex;
		flex-direction: column;
		gap: 20px;
		text-align: justify;
		text-justify: inter-word;
		padding-inline: 10px;

		.card-header {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		.card-body {
			padding-right: 10px;
		}
		
	}
`;

export const BenefitsSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
	padding: 50px;
	margin-top: -50px;
	background-color: #F4F5F7;

	.section-header {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 0px 10%;
	}

	.section-body {
		padding: 0px 10%;
	}
`;
