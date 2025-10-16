'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '@/store/category';
import { Category } from '../../../../generated/prisma';

interface Props {
  className?: string;
  items: Category[];
}
export const Categories: React.FC<Props> = ({ className, items }) => {
  const activeCategory = useCategoryStore((state) => state.activeID);

  return (
    <div
      className={cn(
        'bg-secondary flex flex-wrap gap-2 rounded-2xl p-1.5',
        className
      )}
    >
      {items.map(({ name, id }) => (
        <a
          className={cn(
            'cursor-pointer rounded-xl px-3 py-1',
            activeCategory === id ? 'text-primary shadow' : ''
          )}
          key={id}
          href={`/#${name}`}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
