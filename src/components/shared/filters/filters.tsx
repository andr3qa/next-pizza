'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../../ui';
import { DoughFilter, SizeFilter, PriceFilter, IngredientsFilter } from '.';
import { useFilters } from '@/hooks';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const params = useFilters();

  return (
    <aside className={cn('w-50', className)}>
      <h2 className="text-xl font-bold text-black">Фильтрация</h2>
      <DoughFilter
        selectDough={params.selectDough}
        toggleDough={params.toggleDough}
      />
      <SizeFilter
        selectSize={params.selectSize}
        toggleSize={params.toggleSize}
      />
      <PriceFilter prices={params.prices} setPrices={params.setPrices} />
      <IngredientsFilter
        selectIngredients={params.selectIngredients}
        toggleIngredients={params.toggleIngredients}
      />
      <Button
        className="mt-2.5 w-full"
        variant="outline"
        onClick={params.handleReset}
      >
        Сбросить фильтры
      </Button>
    </aside>
  );
};
