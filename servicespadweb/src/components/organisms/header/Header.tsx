import { ButtonLink } from '../../atoms/Buttons/Buttons';
import { HeaderArchors } from '../../molecules';
import { HeaderProps } from './header.type';
import './header.styles.scss'

export const Header = <T extends HeaderProps>({
	title,
	contentList,
	textButton,
	bottonRef
}: T) => {
	return (
		<div className="header">
			<p className="header__title">{title}</p>
			 <HeaderArchors contentList={contentList}/>
			<ButtonLink size='15px' to={bottonRef}>
				{textButton}
			</ButtonLink>
		</div>
	);
}