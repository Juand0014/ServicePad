import { Article } from "../../../models";
import { ButtonLink, Title } from "../../atoms";
import { Container } from "../../atoms/Containers";
import { Cards } from "../../molecules/Cards/Cards";
interface Props<T> {
    title: string;
    textBottom: string;
    buttonDirect: string;
    items: T[];
}

export const ArticlesSection = <T extends Props<Article>>({
    title,
    textBottom,
    buttonDirect,
    items,
}: T) => {
    console.log(items);
    return (
        <Container padding="50px" margin="80px 0px" backgroundColor="#FAFAFA">
            <Container padding="0px 10%" flex flexDirection="column" gap="50px">
                <Container flex justifyContent="space-between" >
                    <Title size="xl">{title}</Title>
                    <ButtonLink
                        to={buttonDirect}
                        size="15px"
                        background="linear-gradient(90deg, #84E1A7 4.85%, #81D6DB 100%);"
                    >
                        {textBottom}
                    </ButtonLink>
                </Container>
				<Cards author="" content="" image_url="" title="" />
            </Container>
        </Container>
    );
};
