import { CardImage, CardTextBody, CardTextDate, CardTextTitle, CardTextWrapper, CardWrapper } from "../../atoms";

export type CardType = {
  title: string;
  author: string;
  imgUrl: string;
	content: string;
};

export const Cards = ({ title, author, imgUrl, content }: CardType) => {
  return (
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>By {author}</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            {content}
          </CardTextBody>
        </CardTextWrapper>
      </CardWrapper>
  );
};