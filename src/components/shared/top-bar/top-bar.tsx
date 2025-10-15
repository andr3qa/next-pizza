'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Categories, Sort } from '.';

interface Props {
  className?: string;
}
export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <h1 className="text-4xl font-extrabold text-black">Все пиццы</h1>
      <div className="mt-5 flex flex-col items-start justify-between gap-5 lg:flex-row">
        <Categories />
        <Sort />
      </div>
    </div>
  );
};
