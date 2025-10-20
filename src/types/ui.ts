import { Ingredient, Product, ProductVariant } from '@prisma/client';

export interface ProductItem extends Product {
  ingredients: Ingredient[];
  productVariant: ProductVariant[];
}
