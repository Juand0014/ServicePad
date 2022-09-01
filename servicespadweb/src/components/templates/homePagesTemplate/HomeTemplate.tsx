import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Article, ResponseEndpoint } from "../../../models";
import { services } from "../../../services/services";
import { ArticlesSection } from "../../organisms";
import { BenefitsSection } from "../../organisms/benefitsSection/BenefitsSection";


export const HomeTemplate = () => {
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
		<>
			<BenefitsSection />
			<ArticlesSection
					title="Latest Articles"
					buttonDirect="/Add-article"
					textBottom="+ Add New Article"
					items={responses as Article[]}
			/>
		</>
	);
}