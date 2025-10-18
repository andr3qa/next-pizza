import { Dialog, DialogContent, DialogTitle } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Product } from '@/prisma/generated/prisma';
import React from 'react';

interface Props {
  className?: string;
  product: Product;
}
export const ProductModalPopup: React.FC<Props> = ({ className, product }) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          'min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0',
          className
        )}
      >
        <DialogTitle>ыва</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
