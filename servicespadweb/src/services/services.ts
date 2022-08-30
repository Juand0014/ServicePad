import { AxiosResponse } from 'axios';
import { api } from '../config';
import { Article, ArticlePost } from '../models';

const findAll = async (): Promise<AxiosResponse<Article[]>> => {
	return await api.get('articles/');
}

const create = async (article: ArticlePost): Promise<AxiosResponse<Article>> => {
	return await api.post('articles/', article);
}

export const services = {
	findAll,
	create
}