import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IndexTitle } from 'types/request-type';
import service from './request';
export const getAllEssayList = (params: Record<string, unknown>): Promise<IndexTitle[]> =>
  service.get<IndexTitle[], IndexTitle[]>('/posts?_page=1', {
    params,
  });
