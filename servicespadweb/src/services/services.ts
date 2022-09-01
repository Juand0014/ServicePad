import { AxiosResponse } from 'axios';
import { api } from '../config';
import { Article, ArticlePost, ResponseEndpoint } from '../models';

const findAll = async (): Promise<AxiosResponse<ResponseEndpoint<Article>>> => {
	return await (await api.get('articles/')).data;
}

const create = async (article: ArticlePost): Promise<AxiosResponse<Article>> => {
	return await api.post('articles/', article);
}

export const services = {
	findAll,
	create
}