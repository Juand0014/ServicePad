import { Text, Title } from "../../atoms"

type CardType = {
		icon: JSX.Element;
		title: string;
		content: string;
	};

export const BenefitsCard = ({
	icon,
	title,
	content
}: CardType) => {
	return (
		<div className="card">
			<div className="card-header">
				<div className="icon">
					{icon}
				</div>
				<Title size='md' >{title}</Title>
			</div>
			<div className="card-body">
				<Text tertiary size='md'>{content}</Text>
			</div>
		</div>
	)
}