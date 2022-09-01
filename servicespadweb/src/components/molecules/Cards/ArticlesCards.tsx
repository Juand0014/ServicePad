import { Text, Title } from "../../atoms";
import { CardBodyArticles, CardsContainerArticles } from "../../atoms/Cards/CardContainer";

export type CardType = {
    title: string;
    author: string;
    image_url: string;
    content: string;
};
 
export const ArticlesCards = ({ title, author, image_url, content }: CardType) => {
    return (
        <div className="card_articles">
            <div className="card_header_articles">
                <img
                    src={image_url}
                    alt="city"
                />
            </div>
            <CardBodyArticles>
                <span className="author">By {author}</span>
                <Title weight="sm" size="sm" padding="10px 0">
                    {title}
                </Title>
                <Text tertiary size="xl">{content}</Text>
            </CardBodyArticles>
        </div>
    );
};
