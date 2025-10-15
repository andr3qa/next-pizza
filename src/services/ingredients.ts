import { axiosInstance } from './axios-instance';
import { ApiRoutes } from './api-routes';
import { Ingredient } from '../../generated/prisma';

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
