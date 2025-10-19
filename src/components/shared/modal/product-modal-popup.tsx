'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Product } from '@/prisma/generated/prisma';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  className?: string;
  product: Product;
}
export const ProductModalPopup: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  console.log(product);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'flex min-h-[500px] w-[1060px] max-w-[1060px] items-center justify-between overflow-hidden bg-white p-4',
          className
        )}
      >
        <img src={product.imageUrl} alt={product.name} />
        <div>
          <DialogTitle>{product.name}</DialogTitle>
          <p>
            {product.ingredients.map(
              (item: { name: string }) => `${item.name.toLocaleLowerCase()}, `
            )}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
