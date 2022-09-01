export interface Article {
	author: string,
	content: string;
	date: string;
	id: number;
	image_url: string;
	title: string;
}

export interface ResponseEndpoint<T>{
	data?: T[] | [];
	message: ''
}

export interface ArticlePost {
	author: string;
	content: string;
	title: string;
}