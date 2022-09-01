import { Icon } from "../../atoms";
import { Container } from "../../atoms/Containers";

type Props = {
	icon: React.ReactNode;
	to: string;
};

interface RenderListIconsProps {
	contentList: Props[];
}

export const RenderListIcons = <T extends RenderListIconsProps>({
	contentList
}: T) => {
	return (
		<Container padding="50px 0 0 0">
			{contentList.map((item, index) => (
				<Icon key={index} to={item.to} >
					{item.icon}
				</Icon>
			))}
		</Container>
	);
}