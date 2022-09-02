import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ArticlePageTemplate } from "../../components/templates/articlePagesTemplate/ArticlePageTemplate";
import { Article, ResponseEndpoint } from "../../models";
import { services } from "../../services/services";

export const AddArticle = () => {
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
	return (
		<div>
			<ArticlePageTemplate 
				withButton={false}
				title="Latest Articles"		
				items={responses as Article[]}
				isLoading={isLoading}
			/>
		</div>
	);
}