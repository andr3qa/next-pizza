'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';
import React from 'react';
import { useDebounce, useSet } from 'react-use';

export interface PriceProps {
  priceFrom: string;
  priceTo: string;
}

export const useFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectDough, { toggle: toggleDough, clear: clearDough }] = useSet(
    new Set<string>(searchParams.get('dough')?.split(',') || [])
  );
  const [selectSize, { toggle: toggleSize, clear: clearSize }] = useSet(
    new Set<string>(searchParams.get('size')?.split(',') || [])
  );
  const [
    selectIngredients,
    { toggle: toggleIngredients, clear: clearIngredients },
  ] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',') || [])
  );
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: searchParams.get('priceFrom') || '',
    priceTo: searchParams.get('priceTo') || '',
  });

  useDebounce(
    () => {
      const filter: Record<string, unknown> = {
        dough: Array.from(selectDough),
        size: Array.from(selectSize),
        ingredients: Array.from(selectIngredients),
      };

      if (prices.priceFrom) filter.priceFrom = prices.priceFrom;
      if (prices.priceTo) filter.priceTo = prices.priceTo;

      const query = qs.stringify(filter, { arrayFormat: 'comma' });
      router.push(`?${query}`, { scroll: false });
    },
    250,
    [selectDough, selectSize, selectIngredients, prices, router]
  );

  const handleReset = React.useCallback(() => {
    setPrices({ priceFrom: '', priceTo: '' });
    clearDough();
    clearSize();
    clearIngredients();
    router.push('/', { scroll: false });
  }, [clearDough, clearSize, clearIngredients, router]);

  return {
    selectDough,
    toggleDough,
    selectSize,
    toggleSize,
    selectIngredients,
    toggleIngredients,
    prices,
    setPrices,
    handleReset,
  };
};
