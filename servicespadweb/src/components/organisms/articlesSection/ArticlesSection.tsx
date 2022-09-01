import { Article } from "../../../models";
import { ButtonLink, Title } from "../../atoms";
import { CardsContainerArticles } from "../../atoms/Cards/CardContainer";
import { Container } from "../../atoms/Containers";
import { ArticlesCards } from "../../molecules";
interface Props<T> {
    title: string;
    textBottom: string;
    buttonDirect: string;
    items: T[];
}

export type ArticlesSectionProps = Props<Article>;

export const ArticlesSection = <T extends Props<Article>>({
    title,
    textBottom,
    buttonDirect,
    items,
}: T) => {
    return (
        <Container padding="50px" margin="80px 0px" backgroundColor="#FAFAFA">
            <Container padding="0px 10%" flex flexDirection="column" gap="50px">
                <Container flex justifyContent="space-between">
                    <Title size="xl">{title}</Title>
                    <ButtonLink
                        to={buttonDirect}
                        size="15px"
                        background="linear-gradient(90deg, #84E1A7 4.85%, #81D6DB 100%);"
                    >
                        {textBottom}
                    </ButtonLink>
                </Container>
                <CardsContainerArticles>
                    {items.map((item: Article) => (
                        <ArticlesCards key={item.id} {...item} />
                    ))}
                </CardsContainerArticles>
            </Container>
        </Container>
    );
};
