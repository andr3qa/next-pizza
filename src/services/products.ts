import { axiosInstance } from './axios-instance';
import { ApiRoutes } from './api-routes';
import { Product } from '@/prisma/generated/prisma';

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};
