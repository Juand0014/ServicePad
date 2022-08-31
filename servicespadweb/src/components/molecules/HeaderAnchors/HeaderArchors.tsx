import { NavLink } from "react-router-dom";
import { ContentListType } from "../../organisms/header/header.type";

export interface HeaderAnchorsProps {
	contentList: ContentListType[];
}

export const HeaderArchors = <T extends HeaderAnchorsProps>({contentList}: T) => {
	return (
		<div className="header__anchors">
			{contentList.map((content, index) => (
					<NavLink 
						className={({ isActive }) => "header__anchors__anchor" + (isActive ? " active" : "")} 
						to={content.link} 
						key={index}>
							{content.content}
						</NavLink>
				))}
		</div>
	);
}