export const weights = {
	sm: 'normal',
	md: 'bold',
	xl: '800'
};

export const sizesTitle = {
	xxs: '10px',
	xs: '15px',
	sm: '20px',
	md: '25px',
	lg: '30px',
	xl: '35px',
	xxl: '40px'
};

export const sizes = {
	xxs: '10px',
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
	xxl: '24px'
};

export type TitleProps = {
	primary? : boolean;
	secondary? : boolean;
	weight?: keyof typeof weights;
	size? : keyof typeof sizesTitle;
};

export type TextProps = {
	primary? : boolean;
	secondary? : boolean;
	weight?: keyof typeof weights;
	size? : keyof typeof sizes;
};