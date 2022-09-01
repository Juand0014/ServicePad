export type CardArticlesProps = {
	flexDirection?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
	alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
	width?: number | string;
	height?: number | string;
	margin?: number | string;
	padding?: number | string;
	borderRadius?: number | string;
	borderWidth?: number | string;
	borderColor?: string;
	backgroundColor?: string;
	shadowColor?: string;
}