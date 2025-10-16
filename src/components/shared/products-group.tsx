'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Product } from '.';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
  title: string;
  items: any[];
  categoryId: number;
}
export const ProductsGroup: React.FC<Props> = ({
  className,
  title,
  items,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveID);
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.25,
    }
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection, title, categoryId, setActiveCategoryId]);

  return (
    <div className={cn('mt-10', className)} id={title} ref={intersectionRef}>
      <h2 className="text-3xl font-extrabold text-black">{title}</h2>
      <div className="mt-10 grid grid-cols-1 content-center justify-items-center gap-x-5 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            ingredients={item.ingredients}
            price={item.productVariant[0].price}
          />
        ))}
      </div>
    </div>
  );
};
