import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { api } from '../config';
import { Article, ArticlePost, ResponseEndpoint } from '../models';

const findAll = async (): Promise<AxiosResponse<ResponseEndpoint<Article>>> => {
	return await (await api.get('articles/')).data;
}

const create = async (article: ArticlePost) => {
	return await (await api.post<ArticlePost>('articles/', article)).data;
}

export const services = {
	findAll,
	create
}