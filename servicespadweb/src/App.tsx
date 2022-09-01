import { ArticlesSection, Header } from "./components/organisms";
import { HeaderProps } from "./components/organisms/header/header.type";
import { AppRouter } from "./routes/AppRoutes";
import "./styles/app.styles.scss";
import { Footer } from "./components/organisms/footer";
import { useQuery } from "@tanstack/react-query";
import { services } from "./services/services";
import { Article, ResponseEndpoint } from "./models";
import { AxiosResponse } from "axios";
import { BenefitsSection } from "./components/organisms/benefitsSection/BenefitsSection";
import { HomeTemplate } from "./components/templates";

const App = () => {
    const { data: response, isLoading } = useQuery<AxiosResponse>(
        ["articles"],
        async () => services.findAll(),
        {
            select(response) {
                const { data } = response || ([] as Article[]);
                return (
                    data &&
                    (data.filter(
                        (item: Article, index: number) =>
                            index >= data.length - 4
                    ) as ResponseEndpoint<Article>)
                );
            },
        }
    );

    const responses = response || ([] as Article[]);

    const headerProps: HeaderProps = {
        title: "easybank",
        contentList: [
            {
                content: "Home",
                link: "/",
                active: true,
            },
            {
                content: "About",
                link: "/About",
                active: true,
            },
            {
                content: "Contact",
                link: "/Contact",
                active: true,
            },
            {
                content: "Blog",
                link: "/Blog",
                active: true,
            },
            {
                content: "Careers",
                link: "/Careers",
                active: true,
            },
        ],
        textButton: "Request Invite",
        bottonRef: "/add-article",
    };

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="App">
            <Header {...headerProps} />
                <AppRouter />
            <Footer />
        </div>
    );
};

export default App;
