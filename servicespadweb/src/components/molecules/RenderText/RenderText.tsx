import { Text, TextLink } from "../../atoms"
import { Container } from "../../atoms/Containers"
import { sizesTitle } from "../../atoms/Texts/texts.types"

type Props = {
	text: string,
}


export interface RenderTextProps {
	items: Props[]; 
}

export const RenderText = <T extends RenderTextProps>(
	{ items }: T
) => {

	return (
		<Container 
			flex 
			flexDirection="column" 
			padding="0 0 0 100px"
		>
			{items.map((item, index) => (
				<Text padding="10px 0" key={index} size={'sm'} secondary>
					{item.text}
				</Text>
			))}
		</Container>
)}