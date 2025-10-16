import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui';
import Link from 'next/link';

export interface ProductProps {
  className?: string;
  id: number;
  imageUrl: string;
  name: string;
  ingredients: [];
  price: number;
}
export const Product: React.FC<ProductProps> = ({
  className,
  id,
  imageUrl,
  name,
  ingredients,
  price,
}) => {
  return (
    <div className={cn('max-w-2xs', className)}>
      <Link href={`/product/${id}`}>
        <div className="bg-primary-foreground w-70 flex items-center justify-center rounded-2xl py-5">
          <img src={imageUrl} alt={name} width={212} height={212} />
        </div>
      </Link>
      <h3 className="mt-4 text-lg font-bold text-black">{name}</h3>
      <p className="mt-2 text-sm text-gray-400">
        {ingredients.map(
          (item: { name: string }) => `${item.name.toLocaleLowerCase()}, `
        )}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-bold text-black">от {price} ₽</p>
        <Button>Добавить</Button>
      </div>
    </div>
  );
};
