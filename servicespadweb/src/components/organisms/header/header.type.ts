export interface ContentListType {
	content: string;
	link: string;
	active: boolean;
}

export interface HeaderProps {
	title: string;
	contentList: ContentListType[];
	textButton: string
	bottonRef: string;
}