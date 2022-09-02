import { ArticlesSection, ArticlesSectionProps } from "../../organisms";
import { FormSections } from "../../organisms/formSection/FormSection";
import { Table } from "../../organisms/table/Table";

export const ArticlePageTemplate = <T extends ArticlesSectionProps>({
	title,
	textBottom,
	buttonDirect,
	items,
	isLoading
}: T) =>{
	return (
		<div>
			<FormSections />
			<Table data={items} />
			<ArticlesSection
					isLoading={isLoading}
					withButton={false}
					title={title}
					buttonDirect={buttonDirect}
					textBottom={textBottom}
					items={items}
			/>
		</div>
	);
}