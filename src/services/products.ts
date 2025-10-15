import { axiosInstance } from './axios-instance';
import { Product } from '../../generated/prisma';
import { ApiRoutes } from './api-routes';

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};
