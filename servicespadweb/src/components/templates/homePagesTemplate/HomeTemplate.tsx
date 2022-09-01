import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Article, ResponseEndpoint } from "../../../models";
import { services } from "../../../services/services";
import { ArticlesSection, ArticlesSectionProps } from "../../organisms";
import { BenefitsSection } from "../../organisms/benefitsSection/BenefitsSection";


export const HomeTemplate = <T extends ArticlesSectionProps>({
		title,
		textBottom,
		buttonDirect,
		items,
}: T) => {
	
	return (
		<>
			<BenefitsSection />
			<ArticlesSection
					title={title}
					buttonDirect={buttonDirect}
					textBottom={textBottom}
					items={items}
			/>
		</>
	);
}