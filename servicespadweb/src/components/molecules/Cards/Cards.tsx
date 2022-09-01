import { CardImage, CardTextBody, CardTextDate, CardTextTitle, CardTextWrapper, CardWrapper } from "../../atoms";
import { Container } from "../../atoms/Containers";

export type CardType = {
  title: string;
  author: string;
  image_url: string;
	content: string;
};

export const Cards = ({ title, author, image_url, content }: CardType) => {
  return (
    <Container padding="10px 20px">
      <CardWrapper>
        <CardImage background={image_url} />
        <CardTextWrapper>
          <CardTextDate>By {author}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {content}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
    </Container>
  );
};