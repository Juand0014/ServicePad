import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs"
import { IconLogo } from "../../../assets/icons/logo";
import { Title, Text, ButtonLink } from "../../atoms";
import { Icon } from "../../atoms";
import { Container } from "../../atoms/Containers";
import { sizes } from "../../atoms/Texts/texts.types";
import { RenderListIcons } from "../../molecules/RenderListIcons/RenderListIcons";
import { RenderText } from "../../molecules/RenderText/RenderText";
import './footer.styles.scss';

export const Footer = () => {

	const contentList = [
		{
			icon: <BsFacebook />,
			to: '#'
		},
		{
			icon: <BsInstagram />,
			to: '#'
		},
		{
			icon: <BsPinterest />,
			to: '#'
		},
		{
			icon: <BsTwitter />,
			to: '#'
		},
		{
			icon: <BsYoutube />,
			to: '#'
		}
	];

	const textList = [[
		{
			text: 'About',
			size: 'sm',
		},
		{
			text: 'Contact',
			size: 'sm',
		},
		{
			text: 'Blog',
			size: 'sm',
	}],[
		{
			text: 'Carrers',
		},
		{
			text: 'Support',
		},
		{
			text: 'Privacy Policy',
		}]];
	

	return (
		<footer className="footer">
			<div className="footer__container">
				<Container padding="10px 0 0 0">
					<IconLogo  />
					<RenderListIcons contentList={contentList} />
				</Container>
				<RenderText items={textList[0]}/>
				<RenderText items={textList[1]}/>
			</div>
				<Container 
					flex 
					flexDirection="column" 
					justifyContent="center" 
					alignItems={'center'} 
					padding="20px 0 0 0"
				>
					<ButtonLink padding="10px 30px" size="15px" to={''}>
					Request Invite
					</ButtonLink>
					<Text padding="20px 0" secondary size="xs">
					© Easybank. All Rights Reserved
					</Text>
				</Container>
		</footer>
	)
}