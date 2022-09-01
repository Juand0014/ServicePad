import { ButtonLink } from '../../atoms/Buttons/Buttons';
import { HeaderArchors } from '../../molecules';
import { HeaderProps } from './header.type';
import './header.styles.scss'
import { IconLogo } from '../../../assets/icons/logo';

export const Header = <T extends HeaderProps>({
	title,
	contentList,
	textButton,
	bottonRef
}: T) => {
	return (
		<div className="header">
			<IconLogo color='#000'/>
			 <HeaderArchors contentList={contentList}/>
			<ButtonLink size='15px' to={bottonRef}>
				{textButton}
			</ButtonLink>
		</div>
	);
}