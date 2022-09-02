import styled from "@emotion/styled";

export const InfoSectionContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	justify-content: space-between;
	padding: 0;
	margin: 0;
	background-color: #FAFAFA;
`;

export const TextSectionContainer = styled.div`
		position: relative;
		padding: 150px;
		
		.section-title {
			font-size: 1.5rem;
			font-weight: bold;
			color: #000;
			margin: 0;
			padding: 0;
		}

		.section-text {
			max-width: 600px;
			font-size: 1.1rem;
			font-weight: normal;
			color: #000;
			margin: 0;
			padding: 0;
		}

		.section-button {
			padding-top: 37px;
		}
	}
`;

export const ImageSectionContainer = styled.div`
		position: relative;
		overflow: hidden;
		right: 0;
		.shadows{
			bottom: 0;
		}
		.movils-image {
			position: absolute;
			inset: 0;
			left: 130px;
			top: 0;
			width: 100%;
			height: 105%;
			z-index: 100;
		}
	}
`;

export const SectionsCardInfo = styled.div`
	padding: 30px 12%;

	.title {
		padding: 20px 0;
	}

	.subtitle {
		padding-bottom: 40px;
	}
`