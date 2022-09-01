import { CardImage, CardTextBody, CardTextDate, CardTextTitle, CardTextWrapper, CardWrapper, Text, Title } from "../../atoms";
import { Container } from "../../atoms/Containers";
import './style.cards.scss'

export type CardType = {
  title: string;
  author: string;
  image_url: string;
	content: string;
};

export const Cards = ({ title, author, image_url, content }: CardType) => {
  return (
    <div className="container_articles">
      <div className="card_articles">
        <div className="card-header_articles">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
        </div>
        <div className="card-body_articles">
          <span className="author">By Juan</span>
          <Title weight="sm" padding="10px 0">
            10 Rules of Dashboard Design
          </Title>
          <Text tertiary>
            Dashboard Design Guidelines
          </Text>
        </div>
      </div>
      <div className="card_articles">
        <div className="card-header_articles">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
        </div>
        <div className="card-body_articles">
          <span className="author">By Juan</span>
          <Title weight="sm" padding="10px 0">
            10 Rules of Dashboard Design
          </Title>
          <Text>
            Dashboard Design Guidelines
          </Text>
        </div>
      </div>
      <div className="card_articles">
        <div className="card-header_articles">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
        </div>
        <div className="card-body_articles">
          <span className="author">By Juan</span>
          <Title weight="sm" padding="10px 0">
            10 Rules of Dashboard Design
          </Title>
          <Text>
            Dashboard Design Guidelines
          </Text>
        </div>
      </div>
      <div className="card_articles">
        <div className="card-header_articles">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
        </div>
        <div className="card-body_articles">
          <span className="author">By Juan</span>
          <Title weight="sm" padding="10px 0">
            10 Rules of Dashboard Design
          </Title>
          <Text>
            Dashboard Design Guidelines
          </Text>
        </div>
      </div>
    </div>
  );
};