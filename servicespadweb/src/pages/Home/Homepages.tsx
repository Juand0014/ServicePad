import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { HomeTemplate } from "../../components/templates";
import { Article, ResponseEndpoint } from "../../models";
import { services } from "../../services/services";

export const Home = () => {

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

	// if(isLoading) {
	// 	return <div>Loading...</div>
	// }

	return (
		<HomeTemplate
			withButton
			title="Latest Articles"
			buttonDirect="/Add-article"
			textBottom="+ Add New Article"
			items={responses as Article[]}
 		/>
	)
} ;