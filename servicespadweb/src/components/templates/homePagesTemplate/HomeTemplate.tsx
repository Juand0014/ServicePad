import { ArticlesSection, ArticlesSectionProps } from "../../organisms";
import { BenefitsSection } from "../../organisms/benefitsSection/BenefitsSection";
import { HeroSection } from "../../organisms/infoSection/HeroSection";


export const HomeTemplate = <T extends ArticlesSectionProps>({
		title,
		textBottom,
		buttonDirect,
		items,
}: T) => {
	
	return (
		<>
		  <HeroSection/>
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