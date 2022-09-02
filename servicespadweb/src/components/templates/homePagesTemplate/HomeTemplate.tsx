import { ArticlesSection, ArticlesSectionProps } from "../../organisms";
import { BenefitsSection } from "../../organisms/benefitsSection/BenefitsSection";
import { HeroSection } from "../../organisms/infoSection/HeroSection";


export const HomeTemplate = <T extends ArticlesSectionProps>({
		title,
		textBottom,
		buttonDirect,
		items,
		isLoading
}: T) => {
	
	return (
		<>
		  <HeroSection/>
			<BenefitsSection />
			<ArticlesSection
					withButton={true}
					title={title}
					buttonDirect={buttonDirect}
					textBottom={textBottom}
					items={items}
					isLoading={isLoading}
			/>
		</>
	);
}