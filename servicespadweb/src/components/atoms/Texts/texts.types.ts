export const weights = {
	sm: 'normal',
	md: 'bold',
	xl: '800'
};

export type TitleProps = {
	primary? : boolean;
	secondary? : boolean;
	weight?: keyof typeof weights;
	size? : 'small' | 'medium' | 'large';
	color? : 'primary' | 'secondary' | 'tertiary' | 'quaternary';	
};